import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {

  const [tarea, setTarea] = useState('');
  const tareasLocalStorage = JSON.parse(localStorage.getItem('tareasKey')) || []
  const [tareas, setTareas] = useState(tareasLocalStorage);

  useEffect(()=>{
    console.log('ejecutando useEffect, aqui guardo en localStorage');
    localStorage.setItem('tareasKey', JSON.stringify(tareas));
  },[tareas])

  const handlerSubmit = (e) =>{
    e.preventDefault();
    console.log('Dentro de la funcion submit');
    setTareas([...tareas,tarea]);
    setTarea('');
  }

  const borrarTarea = (nombreTarea) =>{
    const tareasFiltradas = tareas.filter((elementoTarea)=> nombreTarea !== elementoTarea );
    setTareas(tareasFiltradas);
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
      <ListaTareas arrayTareas={tareas} borrarTarea={borrarTarea}/>
    </section>
  );
};

export default FormularioTarea;
