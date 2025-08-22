const submitBtn = document.getElementById("submitBtn");
const volverBtn = document.getElementById("volverBtn");
const containerOpinion = document.getElementById("containerOpinion");
const containerAgradecimiento = document.getElementById(
  "containerAgradecimiento"
);
const score = document.getElementById("score");
const botonesOpiniones = document.querySelectorAll(".botonesOpiniones");

// variable para darle la funcionalidad dark
const chageDark = document.getElementById("chageDark");
//variable para el localStorage
const valueStorage = localStorage.getItem("LocalDarkmode");

//condicionales localStorage
if(valueStorage === "true"){
  document.documentElement.classList.add("dark")
  chageDark.innerHTML = "Ligth";
}else{
  document.documentElement.classList.remove("dark")
  chageDark.innerHTML = "Dark";
} 

//function dark
chageDark.addEventListener("click", () => {
  const darkmode = document.documentElement.classList.toggle("dark");
  if (darkmode) {
    chageDark.innerHTML = "Ligth";
  } else {
    chageDark.innerHTML = "Dark";
  }
  localStorage.setItem("LocalDarkmode", darkmode);
});
// con el submit hace cambio de card y con el boton hace que se muestre el numero en la carte de agradecimiento, todo dentro de un forEach para que no se pueda mandar sin tener una opcion
botonesOpiniones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    score.innerHTML = e.target.innerText;
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
      containerAgradecimiento.classList.add("opacity-0", "pointer-events-none");
      containerAgradecimiento.classList.remove("opacity-100");

      containerOpinion.classList.remove("opacity-0", "pointer-events-none");
      containerOpinion.classList.add("opacity-100");
    });
  });
});
