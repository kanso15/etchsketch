const container = document.getElementById("container");


const n = 16;
function createSquare(n){
    const l = Math.pow(n,2)
    for (i=l; i >0; i--){
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("square"); 
        div.style.width = `${550 / n}px`
        div.style.height = `${550 / n}px`
    }
}
createSquare(n);

function userGrid(){  
    const input = document.getElementById('inputBox');
    const userInput = input.value;

    if(userInput>100 || userInput < 2){
        alert("Please enter a number between 2 and 100")
    }

    else{
        container.textContent = "";
        createSquare(userInput);
    }
}


const go = document.getElementById('createGrid');
go.addEventListener('click', () => {userGrid()});

go.addEventListener('hover', () => (hex()))