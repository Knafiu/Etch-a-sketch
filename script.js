let mouseDown = false;
document.addEventListener("mousedown", () => {mouseDown = true});
document.addEventListener("mouseup", ()=> (mouseDown = false));
const grid_size = document.getElementById("Size");

function createGrid(val){
    const grid = document.querySelector(".container");
    grid.innerHTML = "";
    for (let i = 0; i < val; i++){
        for (let j =0; j < val; j++){
            let box = document.createElement("div");
            box.classList.add("square");
            box.textContent = j;
            const size = (480/val)-2;
            box.style.width = size + "px";
            box.style.height = size + "px";
            box.style.border = "1px solid black";
            box.addEventListener("mousedown", (e)=> {
                e.preventDefault();
                color(box);

            });
            box.addEventListener("mouseover", ()=> {if(mouseDown){color(box);}});
            grid.appendChild(box);
        }
    }
}
function color(box){
    if (!box.style.opacity){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        box.style.opacity = "0.1";
    }
    else{
        const opa = parseFloat(box.style.opacity);
        if (opa < 1){
            box.style.opacity = opa + 0.1;
        }
    }   
}

createGrid(16);

let button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    if (!grid_size.value){
        createGrid(16);
    }
    else{
        if (parseInt(grid_size.value) <= 30){
            createGrid(parseInt(grid_size.value));
        }
    }
    
})
