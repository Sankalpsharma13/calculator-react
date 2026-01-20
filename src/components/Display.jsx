import React from 'react';
import './Display.css';

const Display = ({ current, previous, operation }) => {
    return (
        <div className="display-container">
            <div className="previous-operand">
                {previous} {operation}
            </div>
            <div className="current-operand">
                {current || '0'}
            </div>
        </div>
    );
};

export default Display;
