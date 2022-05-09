import '../css/sidebar.css';
import '../css/utility.css';
import {FaInbox,FaBed,FaUserCog,FaRegLifeRing,FaExternalLinkSquareAlt} from "react-icons/fa";
import {Link} from 'react-router-dom';

const Sidebar = () => {
        return ( 
                <nav className="side">
                        <div className="name">
                                <p className='name_span'>JD</p>               
                        </div>
                        <div className="detail">
                                <p className="username">John Doe</p>
                                <p className="membership">Premium Nomad</p>
                        </div>
                        <div className="option with_icon">
                                <Link to="/booking" className='link'><FaInbox />Bookings</Link>
                        </div>
                        <div className="option with_icon">
                                <Link to="/refer" className='link'><FaBed />Refer and Earn</Link>
                        </div>
                        <div className="option with_icon">
                                <Link to="/account" className='link'><FaUserCog />Account Settings</Link>
                        </div>
                        <p className="title">SUPPORT</p>
                        <div className="option with_icon">
                                <Link to="/contact" className='link'><FaRegLifeRing />Contact Us</Link>
                        </div>
                        <div className="option with_icon">
                                <Link to="/faq" className='link'><FaExternalLinkSquareAlt />FAQ</Link>
                        </div>
                        <div className="sign-out">
                                <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                </label>
                                <p>Sign Out</p>
                        </div>
                </nav>
        );
}
 
export default Sidebar;