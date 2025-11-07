import { Link } from "react-router-dom";
export const Bienvenida = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center px-6">
      <div className="flex flex-col gap-4 items-center justify-center bg-Very-Dark-Grayish-Blue/30 px-4 py-5 backdrop-blur-xs  rounded-2xl">
        <h1 className="text-white text-6xl">Bienvenido.</h1>
        <p className="text-white text-5xl text-center">
          ¿Deseas registrar un nuevo contacto?
        </p>
        <Link
          to="/registrar"
          className="px-3 py-2 border text-xl text-white border-Desaturated-Dark-Blue rounded-xl  hover:bg-Very-Dark-Grayish-Blue/30 transition-all duration-500 hover:scale-[1.05] "
        >
          Ir a registrar
        </Link>
      </div>
    </div>
  );
};
