import { roll } from "../index.js";

export const Dice = (side) => {

    const elmDice = document.createElement('div');
    elmDice.classList.add("dice")

    const elmDiceIn = document.createElement('div')
    elmDiceIn.classList.add("dice__side")
    if (side === 1) {
        elmDiceIn.classList.add("dice__side--1")
    } else if (side === 2) {
        elmDiceIn.classList.add("dice__side--2")
    } else if (side === 3) {
        elmDiceIn.classList.add("dice__side--3")
    } else if (side === 4) {
        elmDiceIn.classList.add("dice__side--4")
    } else if (side === 5) {
        elmDiceIn.classList.add("dice__side--5")
    } else {
        elmDiceIn.classList.add("dice__side--6")
    }

    const button = document.createElement('button');
    button.classList.add("btn", "btn--small", "roll-btn");
    button.innerHTML = "hodit"

    button.addEventListener("click", () => {
        elmDice.replaceWith(Dice(roll()))
    })

    elmDice.append(elmDiceIn, button)

    return elmDice

};


