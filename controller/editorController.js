function renderEditor(){
    let editor = document.getElementById("editor")

    editor.innerHTML = `
        <label>text:</label>
        <input type="text" id="setTextInp">
        <button id="setTextBtn"> change </button>
    `

    let inp = document.getElementById("setTextInp")
    let btn = document.getElementById("setTextBtn")

    btn.onclick = function(){
        setLineTxt(inp.value)
    }
}


