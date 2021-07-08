import  "./SwitchSound.css"
import {useContext} from 'react'
import MachineContext from "../store/Machine-Context";


function SwintchSound(props){
        const {Main,soundHandle}=useContext(MachineContext);
function onClickHandle(){
    
    soundHandle(!Main);
    props.focus();
}

 return <div className="box-switch">
            <div id="switch" style={Main?{float:'right'}:{float:'left'}} onClick={onClickHandle}>

            </div>
        </div>
}
export default SwintchSound;