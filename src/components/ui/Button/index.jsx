import React from "react";

const customBtn = {
  default: {
    plus: "icon-plus",
    up: "icon-chevron-thin-up"
  },
  type: {
    button: "button",
    form: "submit"
  }
}

const Button = React.memo(({type,className,children,handleClick}) => {
  return <button type={type} className={className} onClick={handleClick}>{children}</button>;
});

export const CustomButton = React.memo(({customType,type,handleClick}) => {
  return <button type={customBtn.type[customType]} className={customBtn.default[type]} onClick={handleClick}></button>
})

Button.displayName = "Button";
CustomButton.displayName = "CustomButton";


export default Button;
