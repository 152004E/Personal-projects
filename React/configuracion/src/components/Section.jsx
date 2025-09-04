import "./Section.css";
import { useState, useEffect } from "react";
import Card from "./Card";

const Section = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);
  console.log(count);

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=${count}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users);
        setUsers(data.users);
      });
  }, [count]);

  const hanleclickBtn = () => {
    setCount(count + 1 );
  };
  const hanleclickBtnAnterior = () => {
  if (count > 1) {
    setCount(count - 1);
  }
};

  return (
    <section>
      <h3>Lista con React</h3>
      <div className="containerSiguiente">
        <button className="btnSiguiente" onClick={hanleclickBtn}>
          Siguiente
        </button>
        <p>{count}</p>
      </div>

      <div className="containerAnterior">
        <p>{count}</p>
        <button className="btnSiguiente" onClick={hanleclickBtnAnterior}>
          Anterior
        </button>
      </div>
      <section className="container">
        {users.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </section>
    </section>
  );
};

export default Section;
