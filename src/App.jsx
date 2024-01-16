import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
    <Container className="my-3">
      <h1 className="text-center my-3">Bienvenido a la lista de tareas</h1>
      <FormularioTarea></FormularioTarea>
    </Container>
    
    <Footer></Footer>
    </>
  );
  
}

export default App;
