import "./Section.css";
import userImagen from "../assets/circulo-azul-usuario-blanco_78370-4707.jpg";
const users = [
  {
    id: 1,
    img: userImagen,
    nombre: "emerson reyes",
    profesion: "Front end",
  },
  {
    id: 2,
    img: userImagen,
    nombre: "Angela pineda",
    profesion: "profesora",
  },
  {
    id: 3,
    img: userImagen,
    nombre: "eduar arias",
    profesion: "lava perros",
  },
];
const hanleclick = () => {
  console.log("hola mundo");
};
const Section = () => {
  return (
    <section>
      <h3>Lista con React</h3>
      <section className="container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <img className="img" src={user.img} alt="" />
              <h2 className="nombre">{user.nombre}</h2>
              <p className="porfesion">{user.profesion}</p>
              <button className="btn" onClick={hanleclick}>
                Contactar
              </button>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Section;
