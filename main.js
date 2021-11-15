let boton = document.querySelector("#boton");
let menu = document.querySelector(".navbar");
let header = document.querySelector(".container_header");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    if (menu.classList.contains("open")) menu.classList.remove("open");
    else menu.classList.add("open");
});

let logo = document.querySelector(".logo_container");
logo.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll(".input");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputSubject = document.querySelector("#subject");
const inputMessage = document.querySelector("#message");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    subject = /^[a-zA-Z0-9]{1,300}$/;
    message = /^[a-zA-Z0-9]{1,1000}$/;
    if (!nombre.test(inputName.value)) {
        console.log("El nombre es invalido");
    }else if (!email.test(inputEmail.value)) {
        console.log("El email es invalido");
    }else if (!subject.test(inputSubject.value)) {
        console.log("El subject es invalido");
    }else if (!message.test(inputMessage.value)) {
        console.log("El message es invalido");
    }else{
        formulario.reset();
        console.log("formulario enviado correctamente");
    }
});