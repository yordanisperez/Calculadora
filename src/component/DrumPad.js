import "./DrumPad.css"
import {useState } from "react";
import useActiveBank from "./activeBank";
import usePlaySoundEventKeyboar from "./playSoundHandle";
import {useContext } from "react";
import MachineContext  from '../store/Machine-Context'


const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: '0 3px orange',
   // height: 60,
    marginTop: 13
  };
  
  const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShadow: '3px 3px 5px black'
  };

function DrumPad(props) {
    const bank=useActiveBank(props.bankOne,props.bankTwo);
    const [padStyle,setPadStyle]=useState(inactiveStyle);
    const {setDisplay}=useContext(MachineContext);
    usePlaySoundEventKeyboar(bank,setPadStyle);

   function playSoundHandle()
    {
             setPadStyle(activeStyle);
            const _keyTrigger=bank.keyTrigger;
            const audio =document.getElementById(_keyTrigger);
            audio.currentTime=0;
             audio.play()
            .then(()=>{
                setTimeout(() => {}, 100);
            })
            .catch(err=>console.log(err));
 
    }

    function onClickHandle(){
        playSoundHandle();
        setPadStyle(inactiveStyle);
  
    }
    function onMouseDownHandle()
    {
        setDisplay(bank.id);
        setPadStyle(activeStyle);
       
    }

    return ( 
    <div     
        className='drum-pad'
        id={bank.id}
        onClick={onClickHandle}
        onMouseDown={onMouseDownHandle}            
        style={padStyle}
        >
            <audio
                className='clip'
                id={bank.keyTrigger}
                src={bank.url}
               
            />
        {bank.keyTrigger}
    </div>
    )

}

export default DrumPad;