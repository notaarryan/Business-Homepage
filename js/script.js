let darkModeBtn = document.querySelector(".darkMode");
let background = "white";

darkModeBtn.addEventListener("click", () => {
  if (background === "white") {
    document.querySelector("body").style.backgroundColor = "#0F1217";
    document.querySelector(".name").style.color = "#F2F5F9";
    background = "black";
    document.querySelector(".navContainer").style.backgroundColor = "#1C1E24";
  } else if (background === "black") {
    document.querySelector("body").style.backgroundColor = "#F2F5F9";
    document.querySelector(".name").style.color = "black";
    background = "white";
  }
});
