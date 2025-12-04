export const Modulo1Page = () => {
  let saga = "Saiyan Saga";
  let entrenamineto: number = 12;

  let guerrero: string = "Goku";
  let Ki: number = 9000;

  let enConbate: Boolean = true;
  let equipoZ :string [] = ["Goku","Vegueta","Gohan", "Piccoro "]

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="mx-auto max-w-3xl p-7">
        <header className="mb-4 border-b border-neutral-700 pb-4 ">
          <h2 className="text-blue-500 font-semibold uppercase text-xl">
            react + typescript - modulo 1
          </h2>
          <p className="text-sm text-neutral-300">
            Tipos basicos, interencias, arrays y tuplas.
          </p>
        </header>
        <section className="mb-8">
          <h2 className="text-lg font-medium text-blue-400 mb-2">
            Inferencia y basicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
            <div>
              <h3>Saga : {saga}</h3>
              <h3>Horas de entrenamiento : {entrenamineto}</h3>
              <h3>Guerrero : {guerrero}</h3>
              <h3>Nivle de ki : {Ki}</h3>
              <h3>En combate : {enConbate ? "Si" : "No"}</h3>

            </div>
          </div>
        </section>
         <section className="mb-8">
          <h2 className="text-lg font-medium text-blue-400 mb-2">
            Arrays
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
            <div>
              <h3>Equipo Z : {equipoZ.join(" , ")}</h3>
              <h3>Horas de entrenamiento : {entrenamineto}</h3>
              <h3>Guerrero : {guerrero}</h3>
              <h3>Nivle de ki : {Ki}</h3>
              <h3>En combate : {enConbate ? "Si" : "No"}</h3>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
