import "./Draggable.scss"
import {DragDropContext, Draggable} from "react-beautiful-dnd"
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";


const DraggableComp = ({data})=> {

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
    <div className="draggable">
         <div className="draggable__rows">
            <h2 className="draggable__title">
                Choose your rows
            </h2>
            <div className="draggable__devider"></div>
            <DragDropContext onDragEnd={onDragEnd} >
            <Droppable droppableId="rows">
              {(providedDrop)=>(
                
            <ul className="drg-ul" {...providedDrop.droppableProps} {...providedDrop.dragHandleProps} ref={providedDrop.innerRef}>
            {data.map((item, index)=>{
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