import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { Boton } from "../components/Boton";
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
          <div className="flex flex-col w-[250px] relative">
            <label className="text-white text-xl mb-2"><FontAwesomeIcon icon={faUser} /> Nombre</label>

              <FontAwesomeIcon icon={faCircleUser}  className="text-Light-Grayish-Blue absolute bottom-6 left-2" />
            <input
              type="text"
              className="border border-Light-Grayish-Blue py-1 rounded-xl mb-4 text-white pl-8 "
              placeholder="Nombre de tu contacto"
            />
          </div>
          <div className="flex flex-col w-[250px] relative">
            <label className="text-white text-xl mb-2"><FontAwesomeIcon icon={faPhone} />Teléfono</label>
            <FontAwesomeIcon icon={faMobile} className="text-Light-Grayish-Blue absolute bottom-6 left-2" />
            <input
              type="number"
              className="border border-Light-Grayish-Blue py-1 rounded-xl mb-4 text-white pl-8 "
              placeholder="Numero de tu contacto"
            />
          </div>

          <div className=" flex justify-center items-center gap-5"> 
            <Boton text={"Regresar"} to="/" icon={<FontAwesomeIcon icon={faArrowLeft} className="mr-1" />} />
            <Boton text={"Registar"} type="submit" icon={<FontAwesomeIcon icon={faUserPlus} className="mr-1" />} />
          </div>
        </form>
       
      </div>
    </div>
  );
};
