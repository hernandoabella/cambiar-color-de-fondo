let bgColor = document.querySelector("body");
let hexBtn = document.querySelector(".hexBtn");
let colorCode = document.querySelector(".hex");

const hexNumbers = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6];

hexBtn.addEventListener(
  "click",
  (randomColor = () => {
    let color = "#";

    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hexNumbers.length);
      color += hexNumbers[random];

      bgColor.style.backgroundColor = color;

      colorCode.innerHTML = color;
    }
  })
);

document.getElementById("copyIcon").addEventListener("click", function () {
	const hexCodeElement = document.querySelector(".hex");
	const hexCode = hexCodeElement.innerText;
  
	navigator.clipboard
	  .writeText(hexCode)
	  .then(function () {
		// Mostrar mensaje "Copiado al portapapeles"
		hexCodeElement.innerText = "Copiado al portapapeles";
  
		// Esperar 2 segundos y volver a mostrar el código original
		setTimeout(function () {
		  hexCodeElement.innerText = hexCode;
		}, 500);
	  })
	  .catch(function (error) {
		console.error("Error al copiar al portapapeles:", error);
	  });
  });
  