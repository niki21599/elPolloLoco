let canvas;
let ctx;
let character = new Image();

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    character.src = "../elPolloLoco/img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png";

    setTimeout(() => {

    }, 5000);
    ctx.drawImage(character, 20, 20, 50, 150);
}