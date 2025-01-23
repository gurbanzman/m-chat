import React from "react";

const customInput = {
  defaultType: {
    text: "text",
    pass: "password",
    mail: "email",
    class: "sign-form-item_input"
  }
}

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

export const CustomInput = React.memo(({type,name,placeholder,handleChange}) => {
  return (
    <input
        type={customInput.defaultType[type]}
        name={name}
        placeholder={`Zəhmət olmasa, ${placeholder} qeyd eliyin...`}
        className={customInput.defaultType.class}
        onChange={handleChange}
        required
      />
  );
});

CustomInput.displayName = "CustomInput";
InputText.displayName = "InputText";

export default InputText;
