import "./Draggable.scss"
import {DragDropContext, Draggable} from "react-beautiful-dnd"
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";


function DraggableComp(props) {
  console.log(props);
  return (
    <div className="Draggable">
         <div className="main__choose-rows">
            <h4 className="main__choose-title">
                Coose your rows
            </h4>
            <div className="main__choose-devider"></div>
            <DragDropContext>
            <Droppable droppableId="rows">
              {(providedDrop)=>(
                
            <ul className="drg-ul" {...providedDrop.droppableProps} {...providedDrop.dragHandleProps} ref={providedDrop.innerRef}>
            {props.data.map((item, index)=>{
              return(
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided)=>(
            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
            className="row"> 
                <img className="row-img" src={item.img}/>
            </li>
            )} 
            </Draggable>
            )
            }
            )}
            {providedDrop.placeholder} 
            </ul>
            )}
            </Droppable>
            </DragDropContext> 

            
        </div>
    </div>
  );
}

export default DraggableComp;