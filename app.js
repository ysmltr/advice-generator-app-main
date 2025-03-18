const adviceResult = document.getElementById("advice-text");
const resultBtn = document.getElementById("result-btn");
const adviceNum = document.getElementById("advice-num");

resultBtn.addEventListener("click", () => {
    getAdvice();
});

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(adviceData => {
            const adviceObj = adviceData.slip;
            adviceResult.innerHTML = `<p>${adviceObj.advice}<br></p>`;
            adviceNum.innerHTML = `${adviceObj.id}`;
        })
        .catch(error => {
            console.log(error);
        });
}
