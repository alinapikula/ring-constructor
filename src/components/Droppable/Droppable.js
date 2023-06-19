
import {DragDropContext, Draggable} from "react-beautiful-dnd"
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";
import "./Droppable.scss"
function Droppablebox() {

    const onDragEnd = (result) => {
        const { source, destination } = result;
        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId && source.index === destination.index)
        return
      }
      
  return (
     <DragDropContext onDragEnd={onDragEnd}>
    <div className="drop">
    <div className="drop__rows">
    <h2 className="drop__title">Drop chosen rows</h2>
            <Droppable droppableId="container">
              {(provided, snapshot)=>(
                <div className="drop__container" {...provided.droppableProps} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
            {provided.placeholder}
            </div>
            )}
            </Droppable>
            <button className="drop__btn drop__btn-gen">GENERATE</button>
            <button className="drop__btn drop__btn-rand">RANDOM</button>
        </div>
    </div>
     </DragDropContext>
  );
 
}

export default Droppablebox;