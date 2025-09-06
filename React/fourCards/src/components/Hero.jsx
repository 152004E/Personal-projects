const Hero = () => {
  return (
    <header className="text-center border-2 flex flex-col justify-center items-center py-5 px-3 rounded-2xl shadow-2xl mb-[60px]
    transition duration-[1s] hover:scale-[1.07] cursor-pointer
    ">
  <h1 className="text-2xl font-extralight">
    Entrega confiable y eficiente
  </h1>
  <h2 className="text-2xl font-semibold mb-3"> Impulsado por la Tecnología </h2>
  <p className="text-Grey-400">
    Nuestras herramientas impulsadas por Inteligencia Artificial utilizan millones de datos de <br /> proyectos
    para garantizar que tu proyecto sea exitoso
  </p>
</header>
  );
};

export default Hero;
