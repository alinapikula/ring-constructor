import React from "react";
import "./RowList.scss"
import CustomScroller from "react-custom-scroller";
import {  Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";
import { ITEMS } from "../../assets/initData";

export const RowList = ({rowList}) => {

if (!rowList) {
return (
    <h1>Loading...</h1>
) 
}
console.log(rowList.map(item=> (item.row_id).toString()));
  return (
    
    <div className="row-list">
      <h1 className="row-list__title">Drag your rows</h1>
      <Droppable droppableId="items" isDropDisabled={true}>
        {(provided, snapshot) => (
          <CustomScroller className="row-list">
          <ul className="row-list__list"
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            
            {rowList.map((item, index) => (
              
              <Draggable key={(item.row_id).toString()} draggableId={(item.row_id).toString()} index={index}>
                
                {(provided, snapshot) => (
                  <React.Fragment>
                    <div className="row-list__row"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                      style={provided.draggableProps.style}
                    >
                     <img className="row-list__row-img" src={item.row_img}/> 
                    </div>
                    {snapshot.isDragging && <img className="row-list__row-img" src={item.row_img}/>}
                  </React.Fragment>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
          </CustomScroller>
        )}
      </Droppable>
    </div>
    
  );
};
