var express = require("express");
var bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));

const connectDB = require('./config/db');
connectDB();

// @@@@@@@@@@@@@@@@@@ Models @@@@@@@@@@@@@@@@@@@@
const Post = require('./models/Post')
const User = require("./models/User")   

// ========= PASSPORT ========
var passport             = require("passport");
var LocalStrategy        = require("passport-local");
var passportLocalMongoose= require("passport-local-mongoose");
app.use(require("express-session")({
    secret:"Yeh Jawani Hai Deewani",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===========
//  FUNCTION
// ===========
function isLoggedIn(req,res,next){
    // req.user contains the details about the user
    if(req.isAuthenticated()){
        return next();
    }
    else{
    res.redirect('/signin');
    }
};

// Write above thing first followed by the ↓ thing or else it won't pass updated info to ejs

app.use(function(req,res,next){
    res.locals.user=req.user;
    next();
})


// <----------------- Signup ----------------->
app.get("/reg_user/add_user",isLoggedIn,function(req,res){
    res.render("add_user");
});

app.post("/reg_user/add_user",isLoggedIn,function(req,res){
    User.register(new User({username:req.body.username}),req.body.password, function(err,user){
        if(err){
            console.log(err);
        }
        else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/reg_user");
            })
        }
    })
});

// ======= LOGIN =======
app.get("/signin",function(req,res){
    res.render("signin");
});

app.post("/signin",passport.authenticate("local",{
    successRedirect:"/reg_user",
    failureRedirect:"/signin"
}));

//======== Logout ========
app.get("/logout",function(req,res){
    req.logOut();
    res.redirect("/signin");
});


// <-------------- Navigation Routes -------------->
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/tedcircles", (req, res) => {
  res.render("tedcircles");
});

app.get("/editions", (req, res) => {
  res.render("editions");
});

app.get("/speakers", (req, res) => {
    res.render("speakers");
});

app.get('/blogs',async (req,res)=>{
    const posts = await Post.find({});
    res.render('blogs',{posts:posts});
})

// <------------- Editing Blog Routes -------------->
app.get("/reg_user",isLoggedIn,async (req,res)=>{
    const posts = await Post.find({});
    res.render('reg_user',{posts:posts})
})

app.get("/reg_user/add_blog",isLoggedIn,(req,res)=>{
    res.render('add_blog')
})

app.post('/reg_user/add_blog',isLoggedIn,async (req,res)=>{
    try{
        const post=new Post({
            title:req.body.title,
            url:req.body.url,
            author:req.body.author,
            date:req.body.date,
            body:req.body.body,
            upvotes:req.body.upvotes
        })
        await post.save();
        res.redirect('/reg_user')
    }catch(err){
        console.log(err);
        res.send('Error occured');
    }
})

app.get('/reg_user/edit_blog/:id',isLoggedIn,async (req,res)=>{
    const post = await Post.findById(req.params.id);
    let dd,mm;
    if(post.date.getUTCDate()<10)
        dd=`0${post.date.getUTCDate()}`;
    else
        dd=`${post.date.getUTCDate()}`;
    if(post.date.getUTCMonth()+1<10)
        mm=`0${post.date.getUTCMonth()+1}`
    else
        mm=`${post.date.getUTCMonth()+1}`
    const date = `${post.date.getUTCFullYear()}-${mm}-${dd}`
    res.render('edit_blog',{post:post,date:date})
})

app.post('/reg_user/edit_blog/:id',isLoggedIn,async (req,res)=>{
    const post = await Post.findById(req.params.id);
    post.title=req.body.title;
    post.url=req.body.url;
    post.body=req.body.body;
    post.author=req.body.author;
    post.date=req.body.date;
    post.upvotes=req.body.upvotes;
    await post.save();
    res.redirect('/reg_user');
})

app.get('/reg_user/delete/:id',isLoggedIn,async (req,res)=>{
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/reg_user')
})

app.listen(5000, process.env.IP, () => {
  console.log("Connected to server on Port 5000");
});
