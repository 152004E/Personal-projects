import logo from "../assets/images/imgFormly.png";
export const Hero = () => {
  return (
    <div className="text-center mt-16 mb-8">
      <img className="mx-auto  w-24 lg:w-40" src={logo} alt="Imagen de logo" />
      <h1 className="text-[28px]  mb-8 text-Gray-400 lg:text-5xl">¡Lanzaremos <span className="text-Blue-950">pronto!</span></h1>
      <p className="text-Blue-950 font-light text-[15px] lg:text-2xl">Registrate y recibe una notificación</p>
    </div>
  );
};
