const materiasHTML = document.querySelector(".materias");

const materias = [
  {
    nombre: "Matemáticas",
    nota: 7,
  },
  {
    nombre: "Programación en JavaScript",
    nota: 8,
  },
  {
    nombre: "Programación en python",
    nota: 9,
  },
  {
    nombre: "Artquitectura software",
    nota: 7,
  },
  {
    nombre: "Diseño de interfaces",
    nota: 8,
  },
];

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    materia = materias[id];
    if (materia == undefined) reject("Materia no encontrada");
    else
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 1000);
  });
};

const devolverMarteria = async () => {
  let materia = [];
  for (let i = 0; i < materias.length; i++) {
    materia[i] = await obtenerMateria(i);
    let newHtml = `<div class="materia">
          <div class="name">${materia[i].nombre}</div>
          <div class="nota">${materia[i].nota}</div>
        </div>`;
    materiasHTML.innerHTML += newHtml;
  }
};
devolverMarteria();
