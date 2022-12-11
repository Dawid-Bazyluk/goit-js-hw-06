const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", () => {
    if (inputText.value === "") {
        outputText.innerHTML = "Anonymous";
    } else {
    outputText.innerHTML = inputText.value
    }

});




