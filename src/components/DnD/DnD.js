import React, { Component } from "react";
import "./DnD.scss"
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";
import { ITEMS, initState } from "../../assets/initData";
import {CategoryList} from "../styledComponents";
import { reorder, copy, move } from "../../helpers/utils";
import { RowList } from "../RowList/RowList";


class DnD extends Component {
  state = initState;

  onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    switch (source.droppableId) {
      case destination.droppableId:
        this.setState({
          [destination.droppableId]: reorder(
            this.state[source.droppableId],
            source.index,
            destination.index
          )
        });
        break;
      case "ITEMS":
        this.setState({
          [destination.droppableId]: copy(
            ITEMS,
            this.state[destination.droppableId],
            source,
            destination
          )
        });
        break;
      default:
        this.setState(
          move(
            this.state[source.droppableId],
            this.state[destination.droppableId],
            source,
            destination
          )
        );
        break;
    }
  };

  render() {
    return (
      <div className="dnd">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="dnd__container">
            <RowList />
            <div className="dnd__drop">
              <h1 className="dnd__title">Drop chosen</h1>
              <div>
                {Object.keys(this.state).map((list, i) => (
                  <Droppable key={list} droppableId={list}>
                    {(provided, snapshot) => (
                      <CategoryList
                      ref={provided.innerRef}
                      isDraggingOver={snapshot.isDraggingOver}
                      >
                        
                        {this.state[list].map((item, index) => (
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
                                <button
                                  onClick={() => {
                                    const newState = { ...this.state };
                                    newState[list].splice(index, 1);
                                    this.setState(newState);
                                  }}
                                >
                                  X
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </CategoryList>
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
              this.setState(initState);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default DnD;
