import {useContext } from "react";
import MachineContext  from '../store/Machine-Context'


function useActiveBank(bankOne,bankTwo)
{
    const {Main} =useContext(MachineContext);
    return Main?bankOne:bankTwo
}

export default useActiveBank;