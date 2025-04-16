const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")

function jump() {
    if (dino.classList != )
    dino.classList.add("jump")
    
    setTimeout(function (){
        dino.classList.remove("jump");
    } 300);
    }







document.addEventListener("keydown", function (event){
     jump();
});

let isAlive = setInterval(function{
let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
console.log(dinotop);

},10);
    

}