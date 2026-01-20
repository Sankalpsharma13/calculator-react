import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'number', className = '' }) => {
    return (
        <button
            className={`calc-btn ${type} ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
