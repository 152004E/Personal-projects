import { Boton } from "../components/Boton";
import { Link } from "react-router-dom";
export const Registar = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center px-6">
      <div className="flex flex-col gap-4 items-center justify-center bg-Very-Dark-Grayish-Blue/30 px-4 py-5 backdrop-blur-xs  rounded-2xl">
        <h1 className="text-white text-5xl text-center">
          Agrega tu nuevo Contacto.
        </h1>
        <form
          action=""
          className="border border-Desaturated-Dark-Blue w-[300px] p-6 rounded-2xl flex flex-col justify-center items-center "
        >
          <div className="flex flex-col w-[250px]">
            <label className="text-white text-xl mb-2">Nombre</label>

            <input
              type="text"
              className="border border-Light-Grayish-Blue py-1 rounded-xl mb-4 text-white pl-3 "
              placeholder="Nombre de tu contacto"
            />
          </div>
          <div className="flex flex-col w-[250px]">
            <label className="text-white text-xl mb-2">Teléfono</label>
            <input
              type="number"
              className="border border-Light-Grayish-Blue py-1 rounded-xl mb-4 text-white pl-3 "
              placeholder="Numero de tu contacto"
            />
          </div>

          <div className=" flex justify-center items-center gap-5"> 
            <Boton text={"Regresar"} to="/" />
            <Boton text={"Registar"} type="submit" />
          </div>
        </form>
       
      </div>
    </div>
  );
};
