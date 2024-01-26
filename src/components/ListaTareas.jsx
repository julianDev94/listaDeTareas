import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ arrayTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {arrayTareas.map((elementoTarea, posicionTarea) => 
        <ItemTarea key={posicionTarea} nombreTarea={elementoTarea} borrarTarea={borrarTarea}></ItemTarea>
      )}
    </ListGroup>
  );
};

export default ListaTareas;
