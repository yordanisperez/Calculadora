import './Display.css'

import Wrapper from './Wrapper';


function Display(props){

    
    return  <Wrapper>
                 <div id='formula' onClick={props.focus}>
                    {props.formula}
                </div>
                <span id='display' className={'outputScreen'} onClick={props.focus}>
                   {props.currentValue}
                </span>        

          </Wrapper>
}

export default Display;