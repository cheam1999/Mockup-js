import logo from '../image/logo.png';
import {FaBars} from "react-icons/fa";
import '../css/layout.css';
import Sidebar from '../components/sidebar.js';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Booking from './booking';
import Account from './account';
import Refer from './refer.js';
import Contact from './contact.js';
import FAQ from './faq.js';

const Layout = () => {
        return ( 
                <BrowserRouter>
                        <div className="frame">
                                <div className='container'>
                                        <div className="header">
                                                <img src={logo} alt=""/>
                                                <span className='span_right'>Choose a city<FaBars /></span>               
                                        </div> 
                                        <div className="side">
                                                <Sidebar />
                                        </div>
                                        <div className="content">
                                                <Routes>
                                                        <Route exact path="/" element={<Account />} />
                                                        <Route exact path="/booking" element={<Booking />} />
                                                        <Route exact path="/refer" element={<Refer />} />
                                                        <Route exact path="/account" element={<Account />} />
                                                        <Route exact path="/contact" element={<Contact />} />
                                                        <Route exact path="/faq" element={<FAQ />} /> 
                                                </Routes>
                                        </div>
                                </div>
                        </div>
                </BrowserRouter>
        );
}
 
export default Layout;