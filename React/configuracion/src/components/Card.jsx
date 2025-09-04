import { useState } from "react";

const Card = ({ user }) => {
  const { id, image, firstName,lastName, address } = user;
  const [isContacto, setIscontacto] = useState(false);
  const hanleclick = () => {
    setIscontacto(!isContacto);
    console.log("contactando...");
  };
  return (
    <div className="card" key={user.id}>
      <img className="img" src={user.image} alt="" />
      <h2 className="nombre">{user.firstName}</h2>
      <p className="nombre">{user.lastName}</p>
      <p className="porfesion">{user.address.city}</p>
      <button className="btn" onClick={() => hanleclick()}>
        {isContacto ? "contactado" : "contactar"}
      </button>
    </div>
  );
};

export default Card;
