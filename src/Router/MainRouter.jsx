import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";



const MainRouter = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRouter;