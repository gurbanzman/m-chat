import { Link } from "react-router-dom";

const Associative = ({ to, children }) => {
  return (
    <Link to={to} className="sign-form-section_others">
      {" "}
      {children}
    </Link>
  );
};

export default Associative;
