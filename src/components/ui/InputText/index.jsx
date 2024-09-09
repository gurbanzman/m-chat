import React from "react";

const InputText = React.memo(
  ({ type, name, placeholder, className, handleChange }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
        required
      />
    );  
  }
);

InputText.displayName = "InputText";

export default InputText;
