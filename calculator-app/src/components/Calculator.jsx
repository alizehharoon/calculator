import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleDelete = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      const result = evaluate(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const renderButton = (label, onClickHandler) => (
    <input type="button" value={label} onClick={onClickHandler} />
  );

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" name="display" value={displayValue} readOnly />
          </div>
          <div>
            {renderButton('AC', handleClear)}
            {renderButton('DE', handleDelete)}
            {renderButton('.', () => handleButtonClick('.'))}
            {renderButton('/', () => handleButtonClick('/'))}
          </div>
          <div>
            {Array.from({ length: 3 }, (_, index) => (
              renderButton(index + 7, () => handleButtonClick(index + 7))
            ))}
            {renderButton('*', () => handleButtonClick('*'))}
          </div>
          <div>
            {Array.from({ length: 3 }, (_, index) => (
              renderButton(index + 4, () => handleButtonClick(index + 4))
            ))}
            {renderButton('+', () => handleButtonClick('+'))}
          </div>
          <div>
            {Array.from({ length: 3 }, (_, index) => (
              renderButton(index + 1, () => handleButtonClick(index + 1))
            ))}
            {renderButton('-', () => handleButtonClick('-'))}
          </div>
          <div>
            <input type="button" className="special" value="0" onClick={() => handleButtonClick('0')} />
            {renderButton('=', handleEvaluate)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
