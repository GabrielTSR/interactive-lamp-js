"use strict"

const lamp = document.getElementById("lamp")

function buttonsOnOff(disabledTurnOn, disabledTurnOff) {
    const turnOn = document.getElementById("turnOn")
    const turnOff = document.getElementById("turnOff")
    turnOn.disabled = disabledTurnOn
    turnOff.disabled = disabledTurnOff
}

function isLampBroke(lamp) {

    return lamp.src.indexOf("quebrada") !== -1
}

function turnOnLamp() {

    if (!isLampBroke(lamp)) {

        buttonsOnOff(true, false)

        lamp.src = "img/ligada.jpg"
        buttonsOnOff(true, false)
    }
}

function turnOffLamp() {

    if (!isLampBroke(lamp)) {

        buttonsOnOff(true, false)

        lamp.src = "img/desligada.jpg"

        buttonsOnOff(false, true)
    }
}

function breakLamp() {

    buttonsOnOff(true, true)

    lamp.src = "img/quebrada.jpg"

    buttonsOnOff(true, true)

}

//Events
document.getElementById("turnOn")
    .addEventListener("click", turnOnLamp)

lamp.addEventListener("mouseover", turnOnLamp)

document.getElementById("turnOff")
    .addEventListener("click", turnOffLamp)

lamp.addEventListener("mouseleave", turnOffLamp)

lamp.addEventListener("dblclick", breakLamp)