import './Display.css'
import {useContext } from "react";
import MachineContext  from '../store/Machine-Context'

function Display(props){
    const {display}=useContext(MachineContext);
    return <div id={"display"}><h2>{display}</h2></div>
}

export default Display;