import {createContext,useState} from 'react'



const MachineContext= createContext({
    keyPress:{key:'',keyCode:''},
    keyDown:{key:'',keyCode:''},
    keyUpHandle:(even)=>{},
    keyDownHandle:(even)=>{},
    On:true,
    Main:true,
    machineHandle:(onOrOff)=>{},
    soundHandle:(mainOrSecond)=>{},
    display:'',
    setDisplay:(text)=>{}
 
})

export function MachineContextProvider(props){
        const [_keyUp,setKeyUp]=useState({key:'',keyCode:''});
        const [_keyDown,setKeyDown]=useState({key:'',keyCode:''});
        const [machineOn, setMachineOn] =useState(true);//true on machine, false off machine
        const [soundMain,setSoundMain]=useState(true);//true main sound, false second sound
        const [_display,setDisplayText]=useState('');
 
 
 

        function setKeyUpHandle(event){
            setKeyDown({key:'',keyCode:''}) ;
            setKeyUp({key:event.key,keyCode:event.keyCode});
          
        }
        function setKeyDownHandle(event){
            setKeyDown({key:event.key,keyCode:event.keyCode});
          
        }

    const context={
        keyUp:_keyUp,
        keyDown:_keyDown,
        keyUpHandle:setKeyUpHandle,
        keyDownHandle:setKeyDownHandle,       
        On:machineOn,
        Main:soundMain,
        machineHandle:setMachineOn,
        soundHandle:setSoundMain,
        display:_display,
        setDisplay:setDisplayText
    
 
    }
    return <MachineContext.Provider value={context}>
                {props.children}
            </MachineContext.Provider>       
}

export default MachineContext;