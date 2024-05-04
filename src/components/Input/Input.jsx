import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, label, value, onChange, options, ...rest }) => {
  let inputElement = null;

  switch (type) {
    case "text":
      inputElement = <input className={`${styles.inputText}`} type="text" value={value} onChange={(e) => onChange(e.target.value)} {...rest} />;
      break;
    case "select":
        inputElement = (
            <select className={`${styles.select}`} value={value} onChange={(e) => onChange(e.target.value)} {...rest}>
              {options && options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
        );
      break;
    case "money":
      const formattedValue = value.startsWith("$") ? value : "$ " + value;
      inputElement = <input className={`${styles.inputMoney}`} type="text" value={formattedValue} onChange={(e) => {
        const valueWithoutSymbol = e.target.value.replace(/^\$?\s*/, '');
        if (valueWithoutSymbol === '') {
          onChange('0');
          return;
        }
        if (/^\d*\.?\d*$/.test(valueWithoutSymbol) && !isNaN(parseFloat(valueWithoutSymbol))) {
          const valueFormatted = parseFloat(valueWithoutSymbol);
          onChange(e.target.value);
        }
        
      }} {...rest} />;
      break;
    default:
      inputElement = <input className={`${styles.inputText}`} type="text" value={value} onChange={(e) => onChange(e.target.value)} {...rest} />;
  }

  return (
    <div className={`${styles.inputContainer}`}>
      <label className={`${styles.label}`}>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;