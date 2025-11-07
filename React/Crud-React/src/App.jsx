import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bienvenida } from "./components/Bienvenida";
import Threads from "./components/Threads";
import { Registar } from "./pages/Registar";

function App() {
  return (
    <main className="font-Caveat">
      <div className="relative w-full h-screen  bg-black">
        <Threads amplitude={2} distance={0} enableMouseInteraction={true} />
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/registrar" element={<Registar />} />

        </Routes>
      </Router>
    </main>
  );
}

export default App;
