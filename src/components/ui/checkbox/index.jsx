import React from "react";
const variant = {
   default:{
      likes: "post-check",
      bar: "bar",
      close:"close"
   }
}
const CheckBox = React.memo(
   ({name,className,props,handleChange}) => {
      return (
         <input type="checkbox" name={name} className={`${variant.default[className]} ${props}`} onChange={handleChange} required/>
      )
   }
)

CheckBox.displayName = "Checkbox";

export default CheckBox;