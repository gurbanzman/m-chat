import React from "react";

const Button = React.memo(({type,className,children,handleClick}) => {
  return <button type={type} className={className} onClick={handleClick}>{children}</button>;
});

Button.displayName = "Button";

export default Button;
