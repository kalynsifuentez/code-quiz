const backBtn = document.querySelector("#back");
const clearBtn = document.querySelector("#clear");
const result = document.querySelector("#result");

backBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  result.innerText = "";
});
