let n = 16;
function createSquare(n){
    let l = Math.pow(n,2)
    for (i=l; i >0; i--){
        const container = document.getElementById("container");
        const div = document.createElement("div");
        container.appendChild(div);
        div.textContent = i;
        div.classList.add("square"); 
        div.style.width = `${800 / n}px`
        div.style.height = `${800 / n}px`
    }
}

createSquare(n);