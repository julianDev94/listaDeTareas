import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="ejemplo: tarea 1"
            minLength={3}
            maxLength={50}
          />
          <Button variant="dark" className="ms-3" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas />
    </section>
  );
};

export default FormularioTarea;
