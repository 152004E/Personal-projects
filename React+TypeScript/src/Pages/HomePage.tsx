import { Link } from "react-router-dom";

export const HomePage = () => {
  const modulos = [
    {
      id: 1,
      Title: "Introduccion a typeScript en react",
      desc: "Tipos basicos, interencias, arrays y tuplas.",
      path: "/modulo1",
    },
    {
      id: 2,
      Title: "Props y estados",
      desc: "Props opcionales,defaulds y useState tipado",
      path: "/modulo2",
    },
  ];
  return (
    <main className="min-h-screen bg-neutral-800 text-neutral-100">
      <section className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-8 ">
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">
            REACT + TYPESCRIPT
          </h1>
          <p className="text-sm text-neutral-200">
            navega por los modulos del curso
          </p>
        </header>
        <nav className="space-y-3 ">
          {modulos.map((item) => (
            <Link to={item.path} key={item.id} className="group block rounded-xl border border-neutral-400 bg-neutral-900/60 px-5 py-4 transition duration-500 hover:bg-neutral-800 hover:border-blue-400">
              <div className="flex justify-between items-center gap-3">
                <div>
                  <span className="text-[13px] tracking-widest uppercase text-neutral-400">Modulo</span>
                  <h2 className="text-lg mt-1 font-medium text-neutral-100">{item.Title}</h2>
                  <p className="text-sm text-neutral-300">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
};
