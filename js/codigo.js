console.log("hola mundo");

let cabeza_competencias = document.getElementById("cabeza_competencias");
let cuerpo_competencias = document.getElementById("cuerpo_competencias");

let cabeza_referencias = document.getElementById("cabeza_referencias");
let cuerpo_referencias = document.getElementById("cuerpo_referencias");

//captura el click sobre el card head de competencias
cabeza_competencias.addEventListener("click", ()=>{
    console.log("haz hecho click");
    let elementStyle = window.getComputedStyle(cuerpo_competencias);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay === "none"){
        cuerpo_competencias.style.display = "block";
    }else{
        cuerpo_competencias.style.display = "none";
    }
});
//captura el click sobre el card head de referencias
cabeza_referencias.addEventListener("click", ()=>{
    
    let elementStyle = window.getComputedStyle(cuerpo_referencias);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay === "none"){
        cuerpo_referencias.style.display = "block";
    }else{
        cuerpo_referencias.style.display = "none";
    }
});