import Footer from "../footer";
import Middle from "../middle";
import Navbar from "../navbar";

export default function Mega({ children }) {
  return (
    <>
      <Navbar/>
      {children}
      <Middle />
      <Footer />
    </>
  );
}
