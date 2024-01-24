import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {

  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handlerSubmit = (e) =>{
    e.preventDefault();
    console.log('Dentro de la funcion submit');
    setTareas([...tareas,tarea]);
    setTarea('');
  }

  return (
    <section>
      <Form onSubmit={handlerSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="ejemplo: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e)=>setTarea(e.target.value)}
            value={tarea}
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
