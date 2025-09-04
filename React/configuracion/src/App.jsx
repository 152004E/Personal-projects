import "./App.css";

import Header from "./components/header";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header tilte="Titulo" show={true}></Header>
      <Section />
      <Footer />
    </>
  );
}

export default App;
