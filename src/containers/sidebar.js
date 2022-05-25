import {
  FaInbox,
  FaBed,
  FaUserCog,
  FaRegLifeRing,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="position-fixed width-side">
      <div className="mt-4 bg-highlight height-md width-md br-xs shadow transform ">
        <p className="font-lg weight-bold transform icon text-white">JD</p>
      </div>
      <div className="mt-2 mb-2">
        <p className="text-secondary weight-semi">John Doe</p>
        <p className="membership">Premium Nomad</p>
      </div>
      <div className="option">
        <Link to="/booking" className="link">
          <FaInbox />
          Bookings
        </Link>
      </div>
      <div className="option with_icon">
        <Link to="/refer" className="link">
          <FaBed />
          Refer and Earn
        </Link>
      </div>
      <div className="option with_icon">
        <Link to="/account" className="link">
          <FaUserCog />
          Account Settings
        </Link>
      </div>
      <p className="mt-2 mb-1 font-sm weight-semi">SUPPORT</p>
      <div className="option with_icon">
        <Link to="/contact" className="link">
          <FaRegLifeRing />
          Contact Us
        </Link>
      </div>
      <div className="option with_icon">
        <Link to="/faq" className="link">
          <FaExternalLinkSquareAlt />
          FAQ
        </Link>
      </div>
      <div className="mt-5">
        <label className="switch display-i-b verticle-middle">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p className="display-i-b ml-1 weight-semi">Sign Out</p>
      </div>
    </nav>
  );
};

export default Sidebar;
