

var gImgs = [
    {id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat']},
    {id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat']},
    {id: 5, url: 'images/5.jpg', keywords: ['funny', 'cat']}
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}
var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}


function getMeme() {return gMeme;}
function getImgs() {return gImgs;}


function setImg(imgId) {
    gMeme.selectedImgId =imgId;
    renderMeme()
}

function setLineTxt(txt){
    gMeme.lines[0].txt = txt
    renderMeme()
}
