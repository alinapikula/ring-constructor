import {DragDropContext, Draggable} from "react-beautiful-dnd"
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";
import "./Droppable.scss"
function Droppablebox() {
 
  return (
     <DragDropContext>
    <div className="drop">
    <div className="drop__rows">
            <Droppable droppableId="container">
              {(provided)=>(
                <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="drop__container">{provided.placeholder}</div>
            {provided.placeholder}
            </div>
            )}
            </Droppable>
            {/* <div className="main__drop-container"></div>
            <div className="main__drop-container"></div> */}

            <button className="drop__btn drop__btn-gen">GENERATE</button>
            <button className="drop__btn drop__btn-rand">RANDOM</button>
        </div>
    </div>
     </DragDropContext>
  );
 
}

export default Droppablebox;