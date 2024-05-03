let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

btn.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btnIcon.src = "img/light.png";
    btnText.innerHTML = "LIGHT";
  } else {
    btnIcon.src = "img/darc.png";
    btnText.innerHTML = "DARK";
  }
};
