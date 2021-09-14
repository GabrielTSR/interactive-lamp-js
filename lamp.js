"use strict"

const lamp = document.getElementById("lamp")
let idInterval

function buttonsOnOff(disabledTurnOn, disabledTurnOff) {
    const turnOn = document.getElementById("turnOn")
    const turnOff = document.getElementById("turnOff")
    turnOn.disabled = disabledTurnOn
    turnOff.disabled = disabledTurnOff
}

function RedGreenOnOff(redActived, greenActived) {
    if (redActived) {
        blink.classList.remove("green")
        blink.className = "red"
    } else if (greenActived) {
        blink.classList.remove("red")
        blink.className = "green"
    }
}

const isLampBroke = () => lamp.src.indexOf("quebrada") !== -1

function toTurnOnLamp() {

    if (!isLampBroke(lamp)) {
        buttonsOnOff(true, false)
        lamp.src = "img/ligada.jpg"
        buttonsOnOff(true, false)
    }
}

function toTurnOffLamp() {

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
    document.getElementById("blink").disabled = true

}

const isLampOff = () => lamp.src.includes("desligada")

function changeImage() {
    if (isLampOff()) {
        toTurnOnLamp()
    } else {
        toTurnOffLamp()
    }
}

function toBlink() {
    const blink = document.getElementById("blink")

    if (blink.textContent == "BLINK") {

        idInterval = setInterval(changeImage, 1000)
        blink.textContent = "STOP"
        RedGreenOnOff(true, false)
    } else {
        clearInterval(idInterval)
        toTurnOffLamp()
        blink.textContent = "BLINK"
        RedGreenOnOff(false, true)

    }
}

//Events
document.getElementById("turnOn")
    .addEventListener("click", toTurnOnLamp)

lamp.addEventListener("mouseover", toTurnOnLamp)

document.getElementById("turnOff")
    .addEventListener("click", toTurnOffLamp)

lamp.addEventListener("mouseleave", toTurnOffLamp)

lamp.addEventListener("dblclick", breakLamp)

document.getElementById("blink")
    .addEventListener("click", toBlink)