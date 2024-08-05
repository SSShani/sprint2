
function renderMeme(){
    let memeContainer = document.getElementById("memeContainer") 
    let gMeme = getMeme();

    memeContainer.innerHTML = `
        <canvas id="canvas" width="300" height="300"></canvas>
        <div class="textLine" id="topText"></div>
        <div class="textLine" id="bottomText"></div>
    `
    

    let topText = document.getElementById("topText")
    let bottomText = document.getElementById("bottomText")

    let line0 = gMeme.lines[0] 
    let line1 = gMeme.lines[1] 
    if(line0){
        topText.innerHTML = line0.txt
        topText.style.fontSize = line0.size+"px"
        topText.style.color = line0.color
    }
    if(line1){
        bottomText.innerHTML = line1.txt
        bottomText.style.fontSize = line1.size+"px"
        bottomText.style.color = line1.color
    }

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = `images/${gMeme.selectedImgId}.jpg`;
    
    image.onload = function() {
        ctx.drawImage(image, 0,0,canvas.width, canvas.height);
    };
    

}