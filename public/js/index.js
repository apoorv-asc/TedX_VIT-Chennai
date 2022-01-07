function closeNav() {
    document.getElementsByTagName('nav')[0].style.display = "none";
    console.log('Reached');
}

function openNav() {
    document.getElementsByTagName('nav')[0].style.display = "flex";
}

function openAboutTEDxVITChennai() {
    document.getElementById('aboutTEDxVITChennaiHeading').style.color = "white";
    document.getElementById('aboutTEDxVITChennaiHeading').style.borderBottom = "5px solid #E9280B";
    document.getElementById('aboutTEDxHeading').style.borderBottom = "0px solid #E9280B";
    document.getElementById('aboutTEDxHeading').style.color = "lightgray";
    document.getElementById('aboutTEDxContent').innerHTML = `
    <p>We're bringing ideas worth spreading straight to VITChennai.This is a chance to enhance our on-going self-education
    by cutting edge and progressive ideas from speakers in our local community.<br>
    Imagine a remarkable day jam-packed with engaging talks, inventive perfomances,thought-provoking films and rich connections.
    TEDxVITChennai aims to showcase talks that traverse a diversity of topics: science, business, technology, art, design, entertainment, culture
     social justice and much more. Aimed towards bringing people together and igniting discussion, we aim to have people leave the event feeling inspired
     and enlightened by new ideas.</p>
    <p>For updates regarding TEDxVITChennai, visit us on Facebook, Instagram</p>
    `
}

function openAboutTEDx() {
    document.getElementById('aboutTEDxHeading').style.color = "White";
    document.getElementById('aboutTEDxHeading').style.borderBottom = "5px solid #E9280B";
    document.getElementById('aboutTEDxVITChennaiHeading').style.borderBottom = "0px solid #E9280B";
    document.getElementById('aboutTEDxVITChennaiHeading').style.color = "lightgray";
    document.getElementById('aboutTEDxContent').innerHTML = `<p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. </p>
    <p>TEDx was created in the spirit of TED's mission, "ideas worth spreading." It supports independent organizers who want to create a TED-like event in their own community. These local, self-organized events are branded TEDx, where x = independently organized TED event.
    </p>
    <p>At TEDx events, a screening of TED Talks videos — or a combination of live presenters and TED Talks videos — sparks deep conversation and connections at the local level. TEDx events are planned and coordinated independently, under a free license granted by TED.
    </p>
    <p>TEDx events are non-profit, but may use an admission fee or commercial sponsorship to cover costs. Similarly, speakers are not paid. They must also relinquish the copyrights to their materials, which TED may edit and distribute under a Creative Commons license.
    </p>`
}

function openTeamLeads() {
    document.getElementById('teamLeadsButton').className = "activeButton";
    document.getElementById('associatesButton').className = "inactiveButton";
    document.getElementById('teamLeadsContainer').style.display = "flex";
    document.getElementById('associatesContainer').style.display = "none";
}

function openAssociates() {
    document.getElementById('teamLeadsButton').className = "inactiveButton";
    document.getElementById('associatesButton').className = "activeButton";
    document.getElementById('teamLeadsContainer').style.display = "none";
    document.getElementById('associatesContainer').style.display = "flex";
}
