import { Link } from "react-router-dom";
export const Registar = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center px-6">
      <div className="flex flex-col gap-4 items-center justify-center bg-Very-Dark-Grayish-Blue/30 px-4 py-5 backdrop-blur-xs  rounded-2xl">
        <h1 className="text-white text-5xl text-center">
          Agrega  tu nuevo Contacto.
        </h1>
        <form action="" className="border border-Desaturated-Dark-Blue w-[300px] p-6 rounded-2xl">
          <div>
            <label>Nombre</label>

            <input type="text" />
          </div>
          <div>
            <label>Telefono</label>
            <input type="number" />
          </div>

          <button>Registrar</button>
        </form>
        <Link
          to="/"
          className="px-3 py-2 border text-xl text-white border-Desaturated-Dark-Blue rounded-xl  hover:bg-Very-Dark-Grayish-Blue/30 transition-all duration-500 hover:scale-[1.05] "
        >
          Regrasar
        </Link>
      </div>
    </div>
  );
};
