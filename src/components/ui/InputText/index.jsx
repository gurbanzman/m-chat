const InputText = ({type,name,placeholder,className,handleChange}) => {
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
};

export default InputText;