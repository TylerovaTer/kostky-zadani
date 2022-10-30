import { Dice } from "./Dice/Dice.js"

export const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const elmDice1 = Dice(roll());
const elmDice2 = Dice(roll());
const elmDice3 = Dice(roll());
const elmDice4 = Dice(roll());

const elmApp = document.getElementById("dice-row");
elmApp.append(elmDice1, elmDice2, elmDice3, elmDice4)