let bgColor = document.querySelector("body");
let hexBtn = document.querySelector(".bgBtn");
let colorCode = document.querySelector(".hex");

const hexNumbers = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6];

hexBtn.addEventListener("click", randomColor);

function randomColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    color += hexNumbers[random];
  }

  bgColor.style.backgroundColor = color;
  colorCode.innerHTML = color;
}

document.getElementById("copyBtn").addEventListener("click", function () {
  const hexCodeElement = document.querySelector(".hex");
  const hexCode = hexCodeElement.innerText;

  const tempInput = document.createElement("input");
  tempInput.setAttribute("value", hexCode);
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Mostrar mensaje "Copiado al portapapeles"
  hexCodeElement.innerText = "¡Copiado!";

  // Esperar 2 segundos y volver a mostrar el código original
  setTimeout(function () {
    hexCodeElement.innerText = hexCode;
  }, 1000);
});