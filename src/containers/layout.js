import logo from "../image/logo.png";
import { FaBars } from "react-icons/fa";
import Sidebar from "../containers/sidebar.js";
import { BrowserRouter } from "react-router-dom";
import All_Routes from "../routes.js";

const Layout = () => {
    return (
        <BrowserRouter>
            <div className="container ">
                <nav className="p-3 mb-0 position-fixed width-90">
                    <img src={logo} className="position-fixed" alt="" />
                    <span className="float-right text-tertiary weight-semi">
                        Choose a city
                        <span className="bg-white p-icon br ml-icon">
                            <FaBars className="" />
                        </span>
                    </span>
                </nav>
                <div className="row-grid p-3 pb-0 pt-4 ">
                    <div className="col-2 ">
                        <Sidebar />
                    </div>
                    <div className="col-10">
                        <div className="mt-3 pr-5 pl-3">
                            <All_Routes />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Layout;
