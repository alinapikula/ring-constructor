import React from "react";
import "./DnD.scss"
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";
import { ITEMS } from "../../assets/initData";
import { reorder, copy, move } from "../../helpers/utils";
import { RowList } from "../RowList/RowList";



const DnD = ({state, setState}) => {
  // state = initState;

// const List = styled.div`
//   border: 1px ${props => (props.isDraggingOver ? "dashed #000" : "solid #ddd")};
//   background-color: white;
//   padding: 1rem 1rem 0;
//   border-radius: 15px;
//   font-family: sans-serif;
//   height: 20rem;
//   width: 30rem;
  
// `;
//  const CategoryList = styled(List)`
  
//   width: 25rem;
//    height: 7rem;
//    margin-bottom: 3rem;
// `;



  const onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    switch (source.droppableId) {
      // case destination.droppableId:
      //   this.setState({
      //     [destination.droppableId]: reorder(
      //       this.state[source.droppableId],
      //       source.index,
      //       destination.index
      //     )
      //   });
      //   break;
      case "items":
        setState({
          [destination.droppableId]: copy(
            ITEMS,
            state[destination.droppableId],
            source,
            destination
          ),
          "row2": [],
          "row3": [],
        });
        break;
      default:
        setState(
          move(
            state[source.droppableId],
            state[destination.droppableId],
            source,
            destination
          )
        );
        break;
    }
  };

    return (
      <div className="dnd">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="dnd__container">
            <RowList />
            <div className="dnd__drop">
              <h1 className="dnd__title">Drop chosen</h1>
              <div>
                {Object.keys(state).map((list) => (
                  <Droppable key={list} droppableId={list}>
                    {(provided, snapshot) => (
                      <div className="dnd__container-drop"
                      ref={provided.innerRef}
                      isDraggingOver={snapshot.isDraggingOver}
                      > 
                        {state[list].map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                isDragging={snapshot.isDragging}
                                style={provided.draggableProps.style}
                              >
                                <img className="dnd__row-img" src={item.content}/> 
                                <button className="dnd__btn-del"
                                  onClick={() => {
                                    const newState = { ...state };
                                    newState[list].splice(index, 1);
                                    setState(newState);
                                  }}
                                >
                                  x
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </div>
            </div>
          </DragDropContext>
        <div>
          <button
            onClick={() => {
              setState(state);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }


export default DnD;
