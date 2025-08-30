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