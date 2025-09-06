import Hero from "./components/Hero";
import CardContainer from "./components/Card-container";

function App() {
  return (
    <main className="font-Poppins  flex justify-center   text-Grey-500  my-[50px]">
      <section className=" w-[319px] lg:w-[1400px] flex flex-col  justify-center items-center ">
        <Hero />
        <CardContainer />
      </section>
    </main>
  );
}

export default App;
