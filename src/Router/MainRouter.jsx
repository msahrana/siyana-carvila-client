import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";



const MainRouter = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainRouter;