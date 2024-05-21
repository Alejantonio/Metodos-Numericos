document.addEventListener( 'DOMContentLoaded', function (){
document.body.style.background = "linear-gradient(to right, #ffcc00, #ff6699)";

const botonRegistro = document.querySelector("button[type ='submit']");
console.log(botonRegistro);
botonRegistro.addEventListener("mouseover", function(){
    botonRegistro.style.transform = "scale(1.01)";
    botonRegistro.style.background = "ff3399";

});

    botonRegistro.addEventListener("mouseout", function(){
        botonRegistro.style.transform = "scale(1.0)";
        botonRegistro.style.background = "007bff";
    
    });

});
