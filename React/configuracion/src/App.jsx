import "./App.css";

import {Header} from "./components/Header";
import Footer from "./components/footer";
import Section from "./components/Section";

function App() {
  return (<>
    <Header tilte="Titulo" show={false}>
     
    </Header>
    <Section/>
    <Footer/>
    
  </>)
}

export default App;
