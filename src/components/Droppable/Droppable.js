import {DragDropContext, Draggable} from "react-beautiful-dnd"
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";
import "./Droppable.scss"
function Droppablebox() {
 
  return (
     <DragDropContext>
    <div className="droppable">
    <div className="main__drop-rows">
            <Droppable droppableId="container">
              {(provided)=>(
                <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="main__drop-container">{provided.placeholder}</div>
            {provided.placeholder}
            </div>
            )}
            </Droppable>
            {/* <div className="main__drop-container"></div>
            <div className="main__drop-container"></div> */}

            <button className="main__btn main__drop-btn">GENERATE</button>
            <button className="main__btn main__drop-btn">RANDOM</button>
        </div>
    </div>
     </DragDropContext>
  );
 
}

export default Droppablebox;