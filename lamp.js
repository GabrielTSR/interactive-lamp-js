"use strict"

const lamp = document.getElementById("lamp")

function isLampBroke() {

    return lamp.src.indexOf("quebrada") !== -1
}

function turnOnLamp() {

    const turnOn = document.getElementById("turnOn")
    const turnOff = document.getElementById("turnOff")

    if (!isLampBroke()) {



        lamp.src = "img/ligada.jpg"
        turnOff.disabled = false
        turnOn.disabled = true
    }
}

function turnOffLamp() {

    const turnOn = document.getElementById("turnOn")
    const turnOff = document.getElementById("turnOff")

    if (!isLampBroke()) {



        lamp.src = "img/desligada.jpg"

        turnOff.disabled = true
        turnOn.disabled = false
    }
}

function breakLamp() {

    const turnOn = document.getElementById("turnOn")
    const turnOff = document.getElementById("turnOff")

    lamp.src = "img/quebrada.jpg"

    turnOff.disabled = true
    turnOn.disabled = true

}

//Events
document.getElementById("turnOn")
    .addEventListener("click", turnOnLamp)

lamp.addEventListener("mouseover", turnOnLamp)

document.getElementById("turnOff")
    .addEventListener("click", turnOffLamp)

lamp.addEventListener("mouseleave", turnOffLamp)

lamp.addEventListener("dblclick", breakLamp)