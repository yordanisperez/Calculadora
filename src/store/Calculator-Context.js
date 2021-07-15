import {createContext,useState} from 'react'




const CalculatorContext= createContext({
    keyPress:{key:'',keyCode:''},
    keyDown:{key:'',keyCode:'',treaty:''},
    keyUpHandle:(even)=>{},
    keyDownHandle:(even)=>{},
    currenDataDisplay:{},
    setCurrentDataDisplay:(bank)=>{}
 
})

export function CalculatorContextProvider(props){
        const [_keyUp,setKeyUp]=useState({key:'',keyCode:''});
        const [_keyDown,setKeyDown]=useState({key:'',keyCode:'',treaty:''});
        const [currenDataDisplay,setCurrentDataDisplay]=useState({  keyCode:'',keyTrigger: '',type:'Init',id:''});
 
 
 

        function setKeyUpHandle(event){
            setKeyDown({key:'',keyCode:'',treaty:'true'}) ;
            setKeyUp({key:event.key,keyCode:event.keyCode});
          
        }
        function setKeyDownHandle(event){
            setKeyDown({key:event.key,keyCode:event.keyCode,treaty:''});
          
        }

    const context={
        keyUp:_keyUp,
        keyDown:_keyDown,
        keyUpHandle:setKeyUpHandle,
        keyDownHandle:setKeyDownHandle,       
        currenDataDisplay:currenDataDisplay,
        setCurrentDataDisplay:setCurrentDataDisplay
    
    
 
    }
    return <CalculatorContext.Provider value={context}>
                {props.children}
            </CalculatorContext.Provider>       
}

export default CalculatorContext;