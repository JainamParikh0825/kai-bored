const keyInputtedElement = document.querySelector(".key-inputed");
const eventCodeElement = document.querySelector(".event-code");
const eventKeyElement = document.querySelector(".event-key");
const eventKeyCodeElement = document.querySelector(".event-keycode");
const eventShiftKeyElement = document.querySelector(".event-shiftkey");
const eventLocationElement = document.querySelector(".event-location");
const tdsElement = document.querySelectorAll("tbody td");

let count = 0;
const keylogHistory = [];

const keySideHandler = (location) => {
    if (location === 1)
        return "Left Side Key";
    else if (location === 2)
        return "Right Side Key";
    else
        return "General Key";
}

const showHistory = () => {
    if (keylogHistory.length > 3) {
        keylogHistory.shift();
    }

    let i = 8;
    keylogHistory.forEach(his => {
        tdsElement[i].textContent = his.code;
        tdsElement[--i].textContent = his.key;
        tdsElement[--i].textContent = his.keyCode;
        --i;
    });
}

const getKeyPressedInfo = (event) => {
    if (count > 0) {
        const keyInfo = {
            "code": eventCodeElement.textContent,
            "key": eventKeyElement.textContent,
            "keyCode":  eventKeyCodeElement.textContent
        };
        keylogHistory.push(keyInfo);
        showHistory();
    }
    ++count;
    keyInputtedElement.textContent = event.key;
    eventCodeElement.textContent = event.code;
    eventKeyElement.textContent = event.key;
    eventKeyCodeElement.textContent = event.keyCode;
    eventShiftKeyElement.textContent = event.shiftKey;
    eventLocationElement.textContent = keySideHandler(event.location);
}

window.addEventListener("keydown", getKeyPressedInfo);