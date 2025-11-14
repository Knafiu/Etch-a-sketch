function createGrid(){
    const grid = document.querySelector(".container");
    for (let i = 0; i < 16; i++){
        for (let j =0; j < 16; j++){
            let box = document.createElement("div");
            box.classList.add("square");
            box.textContent = j;
            box.style.width = "30px";
            box.style.height = "30px";
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
            box.style.opacity = "0.1";
            box.addEventListener("mouseover", ()=> hover(box));
            grid.appendChild(box);
        }
    }
}
function hover(box){
    const opa = parseFloat(box.style.opacity);
    if (opa < 1){
        box.style.opacity = opa + 0.1;
    }
}

createGrid();