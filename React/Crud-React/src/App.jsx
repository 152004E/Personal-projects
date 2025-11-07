import { Bienvenida } from "./components/Bienvenida";
import Threads from "./components/Threads";
function App() {
  return (
    <main className="">
      <div className="relative w-full h-screen bg-black">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        <Bienvenida/>
      </div>
    </main>
  );
}

export default App;
