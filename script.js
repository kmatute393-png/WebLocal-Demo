const boton =
document.querySelector(".hero button");
boton.addEventListener("click", function() {
    const mensaje = "Hola, quiero una pagina web para mi negocio.";
    const url = "https://wa.me/573222943826?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
});
const botonContacto =
document.querySelector("#botonContacto");
botonContacto.addEventListener("click", function(){
       const mensaje = "Hola, quiero hablar con ustedes sobre una pagina web para mi negocio.";
    const url = "https://wa.me/573222943826?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");  
});