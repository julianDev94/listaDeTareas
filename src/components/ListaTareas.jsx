import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ arrayTareas }) => {
  return (
    <ListGroup>
      {arrayTareas.map((elementoTarea, posicionTarea) => 
        <ItemTarea key={posicionTarea} nombreTarea={elementoTarea}></ItemTarea>
      )}
    </ListGroup>
  );
};

export default ListaTareas;
