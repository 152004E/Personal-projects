import { Boton } from "../components/Boton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const ListContact = () => {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: "paco", telefono: "12345" },
    { id: 2, nombre: "maria", telefono: "67899" },
    { id: 3, nombre: "angel", telefono: "246810" },
  ]);

  return (
    <div className="absolute inset-0 flex justify-center items-center px-6">
      <div className="flex flex-col gap-4 items-center justify-center bg-Very-Dark-Grayish-Blue/30 px-4 py-5 backdrop-blur-xs  rounded-2xl">
        <h1 className="text-white text-6xl text-center">tabla de contactos.</h1>
        <table className="border border-Very-Dark-Grayish-Blue  bg-Very-Dark-Grayish-Blue/50 w-full py-3 px-4  text-[21px] text-Light-Grayish-Blue">
          <thead>
            <tr>
              <th className="border border-Very-Dark-Grayish-Blue">contacto</th>
              <th className="border border-Very-Dark-Grayish-Blue">Número</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => {
              return (
                <tr key={contacto.id} className="text-center">
                  <td className="border border-Very-Dark-Grayish-Blue">
                    {contacto.nombre}
                  </td>
                  <td className="border border-Very-Dark-Grayish-Blue">
                    {contacto.telefono}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className=" flex justify-center items-center gap-5">
          <Boton
            text={"Regresar"}
            to="/"
            icon={<FontAwesomeIcon icon={faArrowLeft} className="mr-1" />}
          />
          <Boton
            text={"Ir a Registar"}
            to={"/registrar"}
            type="submit"
            icon={<FontAwesomeIcon icon={faUserPlus} className="mr-1" />}
          />
        </div>
      </div>
    </div>
  );
};
