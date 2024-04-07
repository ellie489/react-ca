import Navbar from "../Nav";

const Header = ({ onAddToCart }) => {
    return (
      <header>
        <Navbar onAddToCart={onAddToCart} />
      </header>
    );
  };
  
export default Header;