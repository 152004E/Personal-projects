const idCardDark = document.getElementById("idCardDark");

// Obtener modo almacenado
const valueStorage = localStorage.getItem("darkmode");

// Si estaba activado el dark mode, lo aplicamos
if (valueStorage === "true") {
  document.documentElement.classList.add("dark");
  idCardDark.innerHTML = "Light"; // porque el botón servirá para pasar a Light
} else {
  document.documentElement.classList.remove("dark");
  idCardDark.innerHTML = "Dark"; // porque el botón servirá para pasar a Dark
}

// Al hacer clic en el botón, alternamos
idCardDark.addEventListener("click", () => {
  const isDarkMode = document.documentElement.classList.toggle("dark");

  if (isDarkMode) {
    idCardDark.innerHTML = "Light";
  } else {
    idCardDark.innerHTML = "dark";
  }

  // Guardamos el estado en localStorage
  localStorage.setItem("darkmode", isDarkMode);
});
