"use strict"

const lamp = document.getElementById("lamp")

function buttonsOnOff(disabledTurnOn, turnOn) {
    const turnOn = document.getElementById("turnOn")
    const turnOff = document.getElementById("turnOff")
    turnOn.disabled = onState
    turnOn.disabled = offState
}

function isLampBroke(lamp) {

    return lamp.src.indexOf("quebrada") !== -1
}

function turnOnLamp() {

    if (!isLampBroke(lamp)) {

        buttonsOnOff(true, false)

        lamp.src = "img/ligada.jpg"
        turnOff.disabled = false
        turnOn.disabled = true
    }
}

function turnOffLamp() {

    if (!isLampBroke(lamp)) {

        buttonsOnOff(true, false)

        lamp.src = "img/desligada.jpg"

        turnOff.disabled = true
        turnOn.disabled = false
    }
}

function breakLamp() {

    buttonsOnOff(true, true)

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