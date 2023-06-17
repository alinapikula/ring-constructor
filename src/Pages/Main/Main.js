import DraggableComp from "../../components/draggable/Draggable";
import Droppable from "../../components/Droppable/Droppable";
import Result from "../../components/ResultImage/Result";
import "./Main.scss"
import data from '../../assets/dnd-data.json'


function Main() {
  return (
    <div className="main">
   <DraggableComp data ={data}/>
   <Droppable/>
   <Result/>
    </div>
  );
}

export default Main;