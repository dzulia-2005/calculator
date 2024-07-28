const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const specialchars = ["+", "-", "*", "/", "="];
let output = "";

const calculate = (btnvalue) => {
    if (btnvalue === "=" && output != "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "C") {
        output = "";
    } else {
        if (output === "" && specialchars.includes(btnvalue)) return;
        output += btnvalue;
    }

    screen.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
