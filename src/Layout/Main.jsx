import { Outlet } from "react-router-dom";
import Navber from "../components/Shared/Navber";
import Footer from "../components/Shared/Footer";

const Main = () => {
    return (
        <div>
            <Navber />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;