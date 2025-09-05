import { useState } from "react";
import Hero from "./components/Hero";
import CardContainer from "./components/Card-container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <CardContainer />
    </>
  );
}

export default App;
