import {useEffect } from "react";
import useIsForPadEvent from "./isForPadEvent"
import useIsForPadKeyUp from "./isForPadKeyUp";

const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: '0 3px orange',
  //  height: 77,
    marginTop: 13
  };
  
  const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShadow: '3px 3px 5px black'
  };
function usePlaySoundEventKeyboar(bank,setPadStyle){
    const isEventForMy=useIsForPadEvent(bank)
    const isEventKeyUpForMy=  useIsForPadKeyUp(bank)
    useEffect(()=>{  
            if (isEventForMy){
                setPadStyle(activeStyle);
                const _keyTrigger=bank.keyTrigger;
                const audio =document.getElementById(_keyTrigger);
                audio.currentTime=0;
                audio.play().then(()=>{
                    setTimeout(() => {}, 100);
                }).catch(err=>console.log(err));
            }else
            if (isEventKeyUpForMy)
                setPadStyle(inactiveStyle);

});
  
}
export default usePlaySoundEventKeyboar;