/*
function encriptar(){
    var text = document.getElementById("Cuadro").value;
    const texto = document.querySelector(".Boton-Encriptar")
    return alert(text)
}
*/
//Declaro variables
var letras =["e","i","a","o","u"];
var nuevasletras =["enter","imes","ai","ober","ufat"];
var text = document.getElementById("Cuadro")
var mensaje = document.querySelector("mensaje");

//Funcion Encriptar
function encriptarMensaje(){
    var texto = document.getElementById("Cuadro").value.toLowerCase();
    var encriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        if(document.getElementById("Cuadro").value.length !=0){
    
    ocultarMuñeco();
    document.getElementById("Cuadro2").innerHTML = encriptado;
}   else { 
    swal("","Debe ingresar algun texto","error")
}
}

//Funcion Desencriptar cuadro1==> cuadro2
function desencriptarMensaje(){
    var texto = document.getElementById("Cuadro").value.toLowerCase();
    var desencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(document.getElementById("Cuadro").value.length != 0){
    ocultarMuñeco();
    document.getElementById("Cuadro2").innerHTML = desencriptado;
}}

/*
// Funcion desencriptar Cuadro2 ==> Cuadro1
function desencriptarMensaje(){
    var texto2 = document.getElementById("Cuadro2").value.toLowerCase();
    var desencriptado = texto2
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if(texto2.valor !=0){
    const Boton = document.querySelector(".Boton-Desencriptar");
    document.getElementById("Cuadro").value.innerHTML = desencriptado;
}}
*/

//FUNCION COPIAR
function copiar(){
    var contenido = document.getElementById("Cuadro2");
    contenido.select();
    navigator.clipboard.writeText(contenido.value);
    const boton3 = document.querySelector(".Boton-Copiar")
    swal("Copiado","El Texto se ha copiado","success")
    document.getElementById("Cuadro2").value = "";

}

//FUNCION OCULTAR MUÑECO
function ocultarMuñeco(){
    document.getElementById("Muñeco").style.display = "none"
}

//Funcion Recargar Pagina
function recargar(){
    location.reload()
}