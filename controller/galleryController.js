function renderGallery(){
    let images = getImgs();
    
    let gallery = document.getElementById("gallery")

    let gridGallery = document.createElement("div");
    gridGallery.id = "gridGallery"
    gallery.appendChild(gridGallery);

    


    images.forEach(img=>{
        let item = document.createElement("div")
        item.className = "gallery-item"
        item.innerHTML = `<img src="${img.url}"/>`
        item.onclick = ()=>{ onImgSelect(img.id) }
        gridGallery.appendChild(item)
    })
}

function onImgSelect(id){
    setImg(id)
}