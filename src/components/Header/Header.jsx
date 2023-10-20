import Logo from "./Logo";
import Navbar from "./Navbar";


const Header = () => {
    return (
        <div className="flex justify-center items-center bg-lime-50">
            <Logo></Logo>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;