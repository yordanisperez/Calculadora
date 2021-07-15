import {useContext,useEffect,useState } from "react";
import CalculatorContext  from '../store/Calculator-Context'


function useResultDisplay(){
    const {currenDataDisplay,setCurrentDataDisplay} =useContext(CalculatorContext);
    const [dataDisplay,setDataDisplay] =useState({result:'',currentValue:'0',previewInput:'clear',sign:''});
    
 
    useEffect(()=>{
        function operationHandle(){
            
            const regOperator=/[*\+\/-]/;
            if (regOperator.test(dataDisplay.result))
            {
                const resEval=Math.round(1000000000000 * eval(dataDisplay.result.replace('--','+'))) / 1000000000000;
                return resEval.toString();
            }
            return '';
        }

        function chekedDecimal(){
            const regDecimal=/[.]/;
            return regDecimal.test(dataDisplay.currentValue);
        }
       
        switch (currenDataDisplay.type){
            case 'digit':

                if (dataDisplay.previewInput!=='clear'&& dataDisplay.previewInput!=='equal'){
                    if (dataDisplay.currentValue==='0'&& currenDataDisplay.keyTrigger==='0')
                        break;
                    if (dataDisplay.currentValue==='0')
                    {
                        setDataDisplay({
                            result: currenDataDisplay.keyTrigger,
                            currentValue:currenDataDisplay.keyTrigger,
                            previewInput:'digit',
                            sign:''
                        });   
                        break;             
    
                    }
                    setDataDisplay({
                        result: dataDisplay.result.concat(currenDataDisplay.keyTrigger),
                        currentValue:(dataDisplay.previewInput!=='operator') ?dataDisplay.currentValue.concat(currenDataDisplay.keyTrigger)
                                                                            :currenDataDisplay.keyTrigger,
                        previewInput:'digit',
                        sign:''
                    });                
                }
                else{
                    setDataDisplay({
                        result:currenDataDisplay.keyTrigger,
                        currentValue:currenDataDisplay.keyTrigger,
                        previewInput:'digit',
                        sign:''
                    });   
                                    
                }
                break;
                case 'decimal': 
                 if (chekedDecimal())
                    break;
                if (dataDisplay.previewInput!=='clear'&& dataDisplay.previewInput!=='equal'){
                    if (dataDisplay.currentValue==='0'&& currenDataDisplay.keyTrigger==='0')
                        break;
                    setDataDisplay({
                        result: dataDisplay.result.concat(currenDataDisplay.keyTrigger),
                        currentValue:(dataDisplay.previewInput!=='operator') ?dataDisplay.currentValue.concat(currenDataDisplay.keyTrigger)
                                                                            :currenDataDisplay.keyTrigger,
                        previewInput:'digit',
                        sign:''
                    });                
                }
                else{
                    setDataDisplay({
                        result:currenDataDisplay.keyTrigger,
                        currentValue:currenDataDisplay.keyTrigger,
                        previewInput:'digit',
                        sign:''
                    });   
                                    
                }
                break;                              
           case 'operator':
                   
                    if (dataDisplay.result==='')
                    break;
                    console.log("Se valida entrada de operador: ",dataDisplay);
                    if (dataDisplay.previewInput==='operator')
                    {
                        console.log("La entrada previa fue un Operador: ");
                        if (currenDataDisplay.keyTrigger==='-')
                        {
                            console.log("El operador entrado puede ser de signo");
                            if (dataDisplay.sign==='')
                            {
                                console.log("Es de signo el operador");
                                setDataDisplay(
                                    {
                                            result: dataDisplay.result.concat(currenDataDisplay.keyTrigger),                                               
                                        currentValue:currenDataDisplay.keyTrigger,
                                        previewInput:'operator',
                                        sign:'-'
                                    });  
                            }
                            else
                            {
                                  console.log("Ya el operador de signo se trato por lo que no hacemos nada");
                                  break;  
                            }
    
                        }
                        else
                        {
                            setDataDisplay(
                                {
                                          result: dataDisplay.result.replace(/[*\+\/]$/,currenDataDisplay.keyTrigger),                                               
                                    currentValue:currenDataDisplay.keyTrigger,
                                    previewInput:'operator',
                                    sign:''
                                });  
                                console.log(dataDisplay.result);

                        }
                    }
                    else
                    {
                        console.log("La entrada previa no fue un operador");
                       // const operPend=operationHandle();
                        setDataDisplay({
                          //  result: operPend?operPend.concat(currenDataDisplay.keyTrigger)
                          //                  :dataDisplay.result.concat(currenDataDisplay.keyTrigger),
                          result:dataDisplay.result.concat(currenDataDisplay.keyTrigger),
                        currentValue:currenDataDisplay.keyTrigger,
                        previewInput:'operator',
                        sign:''
                    });                
                   }
                break;
                case 'clear':
                setDataDisplay({
                    result: '',
                    currentValue:'0',
                    previewInput:'clear'
                });                
              
                break;
            case 'equal':
                if (dataDisplay.result==='')
                    break;
               
                const resEqual=operationHandle();
                setDataDisplay({
                     result:resEqual?resEqual:dataDisplay.result ,
               currentValue:resEqual?resEqual:dataDisplay.result ,
               previewInput:'equal'
            });
               

            break;
            default:
                break;
        }
        
        setCurrentDataDisplay({  keyCode:'',keyTrigger: '',type:'',id:''});

    },[currenDataDisplay.keyTrigger,currenDataDisplay.type, dataDisplay, setCurrentDataDisplay])


    return dataDisplay;
 
}
export default useResultDisplay;