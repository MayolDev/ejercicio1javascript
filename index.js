'use strict'

//Recogemos botones
const button1 = document.querySelector("#ejercicio1");
const button2 = document.querySelector("#ejercicio2");
const button3 = document.querySelector("#ejercicio3");
const button4 = document.querySelector("#ejercicio4");
const button5 = document.querySelector("#ejercicio5");
const button6 = document.querySelector("#ejercicio6");
const button61 = document.querySelector("#ejercicio61");
const reset = document.querySelector("#reset");

//Ejercicio1
button1.addEventListener("click", () => {
    document.write("<div class='personal-data'> <p class='name'> Iván Mayol Braza </p> " +
    "<p class='years'> 26 años </p></div>" +
    "<div class='button'> <a href='./index.html'> RESET </a></div>")
})

//Ejercicio2
button2.addEventListener("click", () => {
    let nombreEmpleado = "Jose"
    let sueldo = 1200

    let div = document.createElement("div")
    let p = document.createElement("p")
    let content = document.createTextNode("El nombre del empleado es "+  nombreEmpleado + " y su sueldo es " + sueldo )
    
    p.appendChild(content);
    div.appendChild(p);

    document.querySelector("body").appendChild(div)
    
})


//ejercicio3

button3.addEventListener("click", () => {

    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let h1Content = document.createTextNode("Ingrese Nombre de usuario y email")
    let input = document.createElement("input")
    let input2 = document.createElement("input")
    let button = document.createElement("button")
    let buttonContent = document.createTextNode("Enviar")
    button.appendChild(buttonContent)
    h1.className= "form-tittle"
    div.className = "form"
    input.id= "name"
    input2.id="email"
    button.id="form-button"
    input.required = true
    input2.required = true
    input2.type="email"
    h1.appendChild(h1Content)
    div.appendChild(h1)
    div.appendChild(input)
    div.appendChild(input2)
    div.appendChild(button)
    document.querySelector("body").appendChild(div)
    const formButton = document.querySelector("#form-button")
    formButton.addEventListener("click", ()=>{
        console.log('hola')
        const inputName = document.querySelector("#name").value
        const inputEmail = document.querySelector("#email").value
        console.log(inputName)
        console.log(inputEmail)
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let h1Content = document.createTextNode("Los datos introducidos son:")
        let p = document.createElement("p")
        let pContent = document.createTextNode("Usuario: " + inputName + " Email: " + inputEmail)
        p.appendChild(pContent)
        h1.appendChild(h1Content)
        div.appendChild(h1)
        div.appendChild(p)
        p.appendChild(pContent)
        document.querySelector("body").appendChild(div)
    
    })


})

//Ejercicio 4

button4.addEventListener("click", () => {

    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let h1Content = document.createTextNode("Ingrese lado del cuadrado")
    let input = document.createElement("input")
    let button = document.createElement("button")
    let buttonContent = document.createTextNode("Enviar")
    button.appendChild(buttonContent)
    h1.className= "form-tittle"
    div.className = "form"
    input.id= "cuadrado"
    button.id="form-button2"
    input.required = true
    input.type="number"
    h1.appendChild(h1Content)
    div.appendChild(h1)
    div.appendChild(input)
    div.appendChild(button)
    document.querySelector("body").appendChild(div)
    const formButton = document.querySelector("#form-button2")
    formButton.addEventListener("click", ()=>{
        console.log('hola')
        const inputName = document.querySelector("#cuadrado").value
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let h1Content = document.createTextNode("El perimetro del cuadrado es:")
        let p = document.createElement("p")
        let pContent = document.createTextNode("Perímetro: " + inputName * 4)
        p.appendChild(pContent)
        h1.appendChild(h1Content)
        div.appendChild(h1)
        div.appendChild(p)
        p.appendChild(pContent)
        document.querySelector("body").appendChild(div)
    
    })


})

//Ejercicio5
button5.addEventListener("click", () => {

    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let h1Content = document.createTextNode("Ingrese operandos")
    let input = document.createElement("input")
    let input2 = document.createElement("input")
    let input3 = document.createElement("input")
    let input4 = document.createElement("input")
    let button = document.createElement("button")
    let buttonContent = document.createTextNode("Enviar")
    button.appendChild(buttonContent)
    h1.className= "form-tittle"
    div.className = "form"
    input.id= "operando1"
    input2.id="operando2"
    input3.id="operando3"
    input4.id="operando4"
    input.type="number"
    input2.type="number"
    input3.type="number"
    input4.type="number"
    button.id="form-button3"
    input.required = true
    h1.appendChild(h1Content)
    div.appendChild(h1)
    div.appendChild(input)
    div.appendChild(input2)
    div.appendChild(input3)
    div.appendChild(input4)
    div.appendChild(button)
    document.querySelector("body").appendChild(div)
    const formButton = document.querySelector("#form-button3")
    formButton.addEventListener("click", ()=>{
        console.log('hola')
        const operando1 = document.querySelector("#operando1").value
        const operando2 = document.querySelector("#operando2").value
        const operando3 = document.querySelector("#operando3").value
        const operando4 = document.querySelector("#operando4").value

        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let h1Content = document.createTextNode("El resultado es:")
        let p = document.createElement("p")
        let pContent = document.createTextNode("Suma: " + (Number(operando1) + Number(operando2)) +" Multiplicacion: " + (operando3 * operando4) )
        p.appendChild(pContent)
        h1.appendChild(h1Content)
        div.appendChild(h1)
        div.appendChild(p)
        p.appendChild(pContent)
        document.querySelector("body").appendChild(div)
    
    })


})

//Ejercicio6
button6.addEventListener("click", () => {

    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let h1Content = document.createTextNode("Ingrese notas del alumno")
    let input = document.createElement("input")
    let input2 = document.createElement("input")
    let input3 = document.createElement("input")
    let button = document.createElement("button")
    let buttonContent = document.createTextNode("Enviar")
    button.appendChild(buttonContent)
    h1.className= "form-tittle"
    div.className = "form"
    input.id= "nota1"
    input2.id="nota2"
    input3.id="nota3"
    input.type="number";
    input2.type="number";
    input3.type="number";

    button.id="form-button4"
    input.required = true
    h1.appendChild(h1Content)
    div.appendChild(h1)
    div.appendChild(input)
    div.appendChild(input2)
    div.appendChild(input3)
    div.appendChild(button)
    document.querySelector("body").appendChild(div)
    const formButton = document.querySelector("#form-button4")
    formButton.addEventListener("click", ()=>{
        const nota1 = document.querySelector("#nota1").value
        const nota2 = document.querySelector("#nota2").value
        const nota3 = document.querySelector("#nota3").value

        let resultado = 0;
        resultado = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
        console.log(resultado);

        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let h1Content = document.createTextNode("El alumno...")
        let p = document.createElement("p")
        let pContent = document.createTextNode("" )


        if(resultado >= 7){
            pContent = document.createTextNode("PROMOCIONA 🎉🎉🎉" )
            p.className="promociona"
        }else {
            pContent = document.createTextNode("REPITE 👎👎👎" )
            p.className="repite"

        }
        p.appendChild(pContent)
        h1.appendChild(h1Content)
        div.appendChild(h1)
        div.appendChild(p)
        p.appendChild(pContent)
        document.querySelector("body").appendChild(div)
    
    })


})

//Ejercicio6.1
button61.addEventListener("click", () => {

    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let h1Content = document.createTextNode("Ingrese contraseñas iguales")
    let input = document.createElement("input")
    input.type="password"
    let input2 = document.createElement("input")
    input2.type="password"
    let button = document.createElement("button")
    let buttonContent = document.createTextNode("Enviar")
    button.appendChild(buttonContent)
    h1.className= "form-tittle"
    div.className = "form"
    input.id= "password1"
    input2.id="password2"
    button.id="form-button5"
    input.required = true
    h1.appendChild(h1Content)
    div.appendChild(h1)
    div.appendChild(input)
    div.appendChild(input2)
    div.appendChild(button)
    document.querySelector("body").appendChild(div)
    const formButton = document.querySelector("#form-button5")
    formButton.addEventListener("click", ()=>{
        const password1 = document.querySelector("#password1").value
        const password2 = document.querySelector("#password2").value

        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let h1Content = document.createTextNode("Las contraseñas...")
        let p = document.createElement("p")
        let pContent = document.createTextNode("")


        if(password1 == password2){
            pContent = document.createTextNode("Coinciden 🎉🎉🎉" )
            p.className="promociona"
        }else {
            pContent = document.createTextNode("No coinciden... 👎👎👎" )
            p.className="repite"

        }
        p.appendChild(pContent)
        h1.appendChild(h1Content)
        div.appendChild(h1)
        div.appendChild(p)
        p.appendChild(pContent)
        document.querySelector("body").appendChild(div)
    
    })


})


//Reset
reset.addEventListener("click", () => {
    window.location.replace("./index.html");
})

