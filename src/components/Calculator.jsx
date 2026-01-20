import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
    const [current, setCurrent] = useState('');
    const [previous, setPrevious] = useState('');
    const [operation, setOperation] = useState(null);
    const [overwrite, setOverwrite] = useState(false);

    const clear = () => {
        setCurrent('');
        setPrevious('');
        setOperation(null);
        setOverwrite(false);
    };

    const deleteNumber = () => {
        if (overwrite) {
            setCurrent('');
            setOverwrite(false);
            return;
        }
        if (current === '') return;
        setCurrent(current.slice(0, -1));
    };

    const appendNumber = (number) => {
        if (number === '.' && current.includes('.')) return;
        if (overwrite) {
            setCurrent(number);
            setOverwrite(false);
        } else {
            setCurrent(current + number);
        }
    };

    const chooseOperation = (op) => {
        if (current === '') return;
        if (previous !== '') {
            compute();
        }
        setOperation(op);
        setPrevious(current);
        setCurrent('');
    };

    const compute = () => {
        let result;
        const prev = parseFloat(previous);
        const curr = parseFloat(current);
        if (isNaN(prev) || isNaN(curr)) return;

        switch (operation) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '×':
                result = prev * curr;
                break;
            case '÷':
                result = curr === 0 ? "Error" : prev / curr;
                break;
            default:
                return;
        }

        setCurrent(result.toString());
        setOperation(null);
        setPrevious('');
        setOverwrite(true);
    };

    return (
        <div className="calculator-wrapper">
            <Display current={current} previous={previous} operation={operation} />
            <div className="keypad">
                <Button label="AC" onClick={clear} type="action" className="span-two" />
                <Button label="DEL" onClick={deleteNumber} type="action" />
                <Button label="÷" onClick={() => chooseOperation('÷')} type="operator" />

                <Button label="7" onClick={() => appendNumber('7')} />
                <Button label="8" onClick={() => appendNumber('8')} />
                <Button label="9" onClick={() => appendNumber('9')} />
                <Button label="×" onClick={() => chooseOperation('×')} type="operator" />

                <Button label="4" onClick={() => appendNumber('4')} />
                <Button label="5" onClick={() => appendNumber('5')} />
                <Button label="6" onClick={() => appendNumber('6')} />
                <Button label="-" onClick={() => chooseOperation('-')} type="operator" />

                <Button label="1" onClick={() => appendNumber('1')} />
                <Button label="2" onClick={() => appendNumber('2')} />
                <Button label="3" onClick={() => appendNumber('3')} />
                <Button label="+" onClick={() => chooseOperation('+')} type="operator" />

                <Button label="0" onClick={() => appendNumber('0')} className="span-two-rounded-bottom" />
                <Button label="." onClick={() => appendNumber('.')} />
                <Button label="=" onClick={compute} type="accent" />
            </div>
        </div>
    );
};

export default Calculator;
