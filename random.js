let x;
let arrowDiv = document.getElementById("display-container")


let randomArrow = () => {
    x = Math.floor((Math.random()*2)+1)

    if(x === 1) {
        arrowDiv.className = "left"   
    }
    else{
        arrowDiv.className = "right"
    }

} 

arrowDiv.addEventListener("click", randomArrow)

randomArrow()