let page = "home"
let root = document.getElementById("root")

function renderHeader(){
    let header = document.getElementById("header")
    header.innerHTML = `
        <div id="logo">LOGO</div>
        <ul id="menu">
            <li id="menu_gallery">Gallery</li>
            <li id="menu_memes">Memes</li>
            <li id="menu_about">About</li>
        </ul>
    `
    let menu_gallery = document.getElementById("menu_gallery")
    let menu_memes = document.getElementById("menu_memes")
    let menu_about = document.getElementById("menu_about")
    menu_gallery.onclick    =    function(){changePage("gallery")}
    menu_memes.onclick      =    function(){changePage("home")}
    menu_about.onclick      =    function(){changePage("about")}
}



function renderHomePage(){
    root.innerHTML = `
        <div class="inlile-flex">
            <div id="memeContainer"></div>
            <div id="gallery"></div>
        </div>
        <div id="editor"></div>
    `
    renderMeme()
    renderGallery()
    renderEditor()
}

function renderGalleryPage(){
    root.innerHTML = `בבניה`
}
function renderAboutPage(){
    root.innerHTML = `בבניה`
}


function changePage(pageName) {
    page = pageName;
    if(page == "home" )
        renderHomePage()
    else if(page == "gallery")
        renderGalleryPage()
    else if(page == "about")
        renderAboutPage()
    else{
        page = "home" 
        renderHomePage()
    }
}



