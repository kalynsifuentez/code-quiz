const backBtn = document.querySelector("#back");
const clearBtn = document.querySelector("#clear");
const resultEl = document.querySelector(".result");
const resultNameEl = document.querySelector(".result-name");
let highScores = JSON.parse(window.localStorage.getItem("highscores"));

console.log(highScores);

if (highScores) {
    for (let i = 0; i < highScores.length; i++) {
        const highScoreList = document.createElement('h1');
        const initialsList = document.createElement('h1');
        const score = highScores[i];
        initialsList.innerText = `Player: ${score.initials}`;
        highScoreList.innerText = `Score: ${score.score}`;
        resultEl.appendChild(highScoreList);
        resultNameEl.appendChild(initialsList);
    }
    highScores.hidden = false;
}

backBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  resultEl.innerText = '';
  resultNameEl.innerText = '';
});