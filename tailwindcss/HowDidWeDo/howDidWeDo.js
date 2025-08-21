const submitBtn = document.getElementById("submitBtn");
const volverBtn = document.getElementById("volverBtn");
const containerOpinion = document.getElementById("containerOpinion");
const containerAgradecimiento = document.getElementById(
  "containerAgradecimiento"
);
const score = document.getElementById("score");
const botonesOpiniones = document.querySelectorAll(".botonesOpiniones");

botonesOpiniones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    score.innerHTML = e.target.innerText;
    if (boton) {
      submitBtn.addEventListener("click", () => {
        containerOpinion.classList.add("opacity-0", "pointer-events-none");
        containerOpinion.classList.remove("opacity-100");

        containerAgradecimiento.classList.remove(
          "opacity-0",
          "pointer-events-none"
        );
        containerAgradecimiento.classList.add("opacity-100");
      });

      volverBtn.addEventListener("click", () => {
        containerAgradecimiento.classList.add(
          "opacity-0",
          "pointer-events-none"
        );
        containerAgradecimiento.classList.remove("opacity-100");

        containerOpinion.classList.remove("opacity-0", "pointer-events-none");
        containerOpinion.classList.add("opacity-100");
      });
    } else {
      alert("Por favor valorar la encuesta");
    }
  });
});
