import { useState } from "react";
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid'
import DraggableComp from "../../components/draggable/Draggable";
import Droppable from "../../components/Droppable/Droppable";
import Result from "../../components/ResultImage/Result";
import "./Main.scss"
import data from '../../assets/dnd-data.json'
import { DragDropContext } from "@hello-pangea/dnd";



const v4Id = uuidv4()


function Main() {


  return (
    <div className="main">
    <DraggableComp data ={data} />
    <Droppable />
    <Result/>
    </div>
  );
}

export default Main;