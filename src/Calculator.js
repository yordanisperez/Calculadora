import './Calculator.css';
import Key from './component/Key';
import {useContext,useEffect,useRef,useState} from "react";
import CalculatorContext from './store/Calculator-Context'
import Display from './component/Display'



const banks = [
  {
    keyCode: 48,
    keyTrigger: '0',
    type:'digit',
    id:'zero'
 
  },
  {
    keyCode: 55,
    keyTrigger: '7',
    type:'digit',
    id:'seven'
  },
  {
    keyCode: 56,
    keyTrigger: '8',
    type:'digit',
    id:'eight'
  },
  {
    keyCode: 57,
    keyTrigger: '9',
    type:'digit',
    id:'nine'
  },
  {
    keyCode: 52,
    keyTrigger: '4',
    type:'digit',
    id:'four'
  },
  {
    keyCode: 53,
    keyTrigger: '5',
    type:'digit',
    id:'five'
  },
  {
    keyCode: 54,
    keyTrigger: '6',
    type:'digit',
    id:'six'
  },
  {
    keyCode: 49,
    keyTrigger: '1',
    type:'digit',
    id:'one'
  },
  {
    keyCode: 50,
    keyTrigger: '2',
    type:'digit',
    id:'two'
  },
  {
    keyCode: 51,
    keyTrigger: '3',
    type:'digit',
    id:'three'
  },
  
  {
    keyCode: 111,
    keyTrigger: '/',
    type:'operator',
    id:'divide'
  },

  {
    keyCode:106 ,
    keyTrigger: '*',
    type:'operator',
    id:'multiply'
  },

  {
    keyCode:109 ,
    keyTrigger: '-',
    type:'operator',
    id:'subtract'
  },

  {
    keyCode:107,
    keyTrigger: '+',
    type:'operator',
    id:'add'
  },

  {
    keyCode:190,
    keyTrigger: '.',
    type:'decimal',
    id:'decimal'
  }

  ,

  {
    keyCode:61,
    keyTrigger: '=',
    type:'equal',
    id:'equals'
  }

  ,

  {
    keyCode:65,
    keyTrigger: 'AC',
    type:'clear',
    id:'clear'
  }
];


function Calculator(props) {
  const calCtx =useContext(CalculatorContext);
  const keyboardCalc = useRef();
 // const {result,currentValue}=useResultDisplay();
 const [dataDisplay,setDataDisplay] =useState({result:'',currentValue:'0',previewInput:'clear',sign:''});


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



  function onClickEventKeyHandle(bank){
          switch (bank.type){
            case 'digit':

                if (dataDisplay.previewInput!=='clear'&& dataDisplay.previewInput!=='equal'){
                    if (dataDisplay.currentValue==='0'&& bank.keyTrigger==='0')
                        break;
                    if (dataDisplay.currentValue==='0')
                    {
                        setDataDisplay({
                            result: bank.keyTrigger,
                            currentValue:bank.keyTrigger,
                            previewInput:'digit',
                            sign:''
                        });   
                        break;             

                    }
                    setDataDisplay({
                        result: dataDisplay.result.concat(bank.keyTrigger),
                        currentValue:(dataDisplay.previewInput!=='operator') ?dataDisplay.currentValue.concat(bank.keyTrigger)
                                                                            :bank.keyTrigger,
                        previewInput:'digit',
                        sign:''
                    });                
                }
                else{
                    setDataDisplay({
                        result:bank.keyTrigger,
                        currentValue:bank.keyTrigger,
                        previewInput:'digit',
                        sign:''
                    });   
                                    
                }
                break;
                case 'decimal': 
                if (chekedDecimal())
                    break;
                if (dataDisplay.previewInput!=='clear'&& dataDisplay.previewInput!=='equal'){
                    if (dataDisplay.currentValue==='0'&& bank.keyTrigger==='0')
                        break;
                    setDataDisplay({
                        result: dataDisplay.result.concat(bank.keyTrigger),
                        currentValue:(dataDisplay.previewInput!=='operator') ?dataDisplay.currentValue.concat(bank.keyTrigger)
                                                                            :bank.keyTrigger,
                        previewInput:'digit',
                        sign:''
                    });                
                }
                else{
                    setDataDisplay({
                        result:bank.keyTrigger,
                        currentValue:bank.keyTrigger,
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
                        if (bank.keyTrigger==='-')
                        {
                            console.log("El operador entrado puede ser de signo");
                            if (dataDisplay.sign==='')
                            {
                                console.log("Es de signo el operador");
                                setDataDisplay(
                                    {
                                            result: dataDisplay.result.concat(bank.keyTrigger),                                               
                                        currentValue:bank.keyTrigger,
                                        previewInput:'operator',
                                        sign:'-'
                                    });  
                            }
                            else
                            {
                                  console.log("Ya el operador de signo se trato, no se hace nada");
                                 break; 
                             }

                        }
                        else
                        {
                          if (dataDisplay.sign==='') //if operator of sig not treated
                            {
                                setDataDisplay(
                                    {
                                              result: dataDisplay.result.replace(/[*\+\/]$/,bank.keyTrigger),                                               
                                        currentValue:bank.keyTrigger,
                                        previewInput:'operator',
                                        sign:''
                                    });  
                             }
                                
                          else{
                              console.log('delete operator sign and last operator  how histoy user #13')
                                  setDataDisplay(
                                    {
                                            result: dataDisplay.result.replace(/[*\+\/-]$/,'').replace(/[*\+\/-]$/,'').concat(bank.keyTrigger),                                               
                                        currentValue:bank.keyTrigger,
                                        previewInput:'operator',
                                        sign:''
                                    }); 
 
                          }
                          console.log(dataDisplay.result);
                        }
                    }
                    else
                    {
                        console.log("La entrada previa no fue un operador");
                      // const operPend=operationHandle();
                        setDataDisplay({
                          //  result: operPend?operPend.concat(bank.keyTrigger)
                          //                  :dataDisplay.result.concat(bank.keyTrigger),
                          result:dataDisplay.result.concat(bank.keyTrigger),
                        currentValue:bank.keyTrigger,
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
  }

  //
  useEffect(()=>handleFocus(),[]);
  function handleFocus()
  {
    keyboardCalc.current.focus();
  }
  function onKeyUpHandle(event){
    calCtx.keyUpHandle(event); 
    event.preventDefault();
  }

function onKeyDownHandle(event){ 

   if (banks.some((itkey)=>{return (itkey.keyTrigger===event.key)}))
        onClickEventKeyHandle(banks.filter((itkey)=>{return (itkey.keyTrigger===event.key)})[0]);
    calCtx.keyDownHandle(event);
    event.preventDefault();
    }

    const items = [];

    for (const [index] of banks.entries()) {
      items.push(<Key key={index} bank={banks[index]} onClickKeyEvent={onClickEventKeyHandle} ></Key>)
    }

  return(<div id={"calculator"}  >
          <Display focus={handleFocus} formula={dataDisplay.result} currentValue={dataDisplay.currentValue}/>
          <div ref={keyboardCalc} className={'keyboard'} tabIndex="0" onKeyUp={onKeyUpHandle  } onKeyDown={onKeyDownHandle}>
              {items}
          </div>
        </div>) ; 
}

export default Calculator;
