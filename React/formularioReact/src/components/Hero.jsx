import logo from "../assets/images/logo.svg";
export const Hero = () => {
  return (
    <div className="text-center mt-20 mb-8">
      <img className="mx-auto mb-8 w-14" src={logo} alt="Imagen de logo" />
      <h1 className="text-[22px] ">¡Lanzaremos pronto!</h1>
      <p>Suscríbete y recibe una notificación</p>
    </div>
  );
};
