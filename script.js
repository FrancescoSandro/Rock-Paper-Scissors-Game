"use strict";

let choices = document.querySelectorAll(".choice");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let result = document.querySelector(".result");
let consoleOutput = document.querySelector("#consoleOutput");
let chosen = ["rock", "paper", "scissors"];
let numClick = 1;

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        consoleOutput.innerHTML += `<div> Round: ${numClick}</div>`;
        let userChoose = e.target.id;

        //For Computer only:

        consoleOutput.innerHTML += `<div> User: ${userChoose} </div>`;
        let compChoose = chosen[Math.floor(Math.random() * chosen.length)];
        consoleOutput.innerHTML += `<div> Comp: ${compChoose} </div>`;

        // My if-else condition that create Repetition in if-else blocks for every possible outcome.
        
        // if (userChoose === compChoose) {
        //     result.textContent = `Draw`;
        //     result.style.color = "white";
        //     result.style.backgroundColor = "green";
        // }
        // else if (userChoose === "rock" && compChoose === "scissors") {
        //     you.textContent++;
        //     result.textContent = `You Won! ${userChoose} beats ${compChoose}`;
        //     result.style.color = "white";
        //     result.style.backgroundColor = "green";
        // }
        // else if (userChoose === "scissors" && compChoose === "rock") {
        //     comp.textContent++;
        //     result.textContent = `Comp Won! ${compChoose} beats ${userChoose}`;
        //     result.style.backgroundColor = "black";
        //     result.style.color = "white";

        // }
        // else if (userChoose === "paper" && compChoose === "rock") {
        //     you.textContent++;
        //     result.textContent = `You Won! ${userChoose} beats ${compChoose}`;
        //     result.style.color = "white";
        //     result.style.backgroundColor = "green";
        // }
        // else if (userChoose === "rock" && compChoose === "paper") {
        //     comp.textContent++;
        //     result.textContent = `Comp Won! ${compChoose} beats ${userChoose}`;
        //     result.style.backgroundColor = "black";
        //     result.style.color = "white";
        // }
        // else if (userChoose === "scissors" && compChoose === "paper") {
        //     you.textContent++;
        //     result.textContent = `You Won! ${userChoose} beats ${compChoose}`;
        //     result.style.color = "white";
        //     result.style.backgroundColor = "green";
        // }
        // else if (userChoose === "paper" && compChoose === "scissors") {
        //     comp.textContent++;
        //     result.textContent = `Comp Won! ${compChoose} beats ${userChoose}`;
        //     result.style.color = "white";
        //     result.style.backgroundColor = "black";
        // }

        //ChatGPT Code reduce Style:
        if (userChoose === compChoose) {
            result.textContent = "Draw";
            result.style.backgroundColor = "gray";
        } else if (
            (userChoose === "rock" && compChoose === "scissors") ||
            (userChoose === "paper" && compChoose === "rock") ||
            (userChoose === "scissors" && compChoose === "paper")
        ) {
            you.textContent = Number(you.textContent) + 1;
            result.textContent = `You Won! ${userChoose} beats ${compChoose}`;
            result.style.backgroundColor = "green";
        } else {
            comp.textContent = Number(comp.textContent) + 1;
            result.textContent = `Comp Won! ${compChoose} beats ${userChoose}`;
            result.style.backgroundColor = "black";
        }

        consoleOutput.innerHTML += `<div>------------------------</div>`;
        numClick++;
    });
});




