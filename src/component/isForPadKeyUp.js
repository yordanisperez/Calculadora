import {useContext } from "react";
import MachineContext  from '../store/Machine-Context'


function useIsForPadKeyUp(bank){
    const {keyUp} =useContext(MachineContext);
    if (keyUp.keyCode===bank.keyCode){
       
        return true;
    }
   return false;
}

export default useIsForPadKeyUp;