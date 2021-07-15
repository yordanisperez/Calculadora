import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';
import {CalculatorContextProvider} from './store/Calculator-Context'


ReactDOM.render(<CalculatorContextProvider>
                        <Calculator />
                </CalculatorContextProvider>,
        document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
