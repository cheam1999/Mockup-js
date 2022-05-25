import {
  FaChevronRight,
  FaRegCheckCircle,
  FaRegClock,
  FaRegCalendarCheck,
  FaReceipt,
  FaStar,
  FaRegPaperPlane,
} from "react-icons/fa";
import room from "../image/room.png";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div>
      <div className="description mb-3">
        <h1 className="mb-3">Bookings</h1>
        <h4 className="mb-2">Your current upcoming stays</h4>
        <p className="mb-2">
          Please update with the properity if your travel plans should change or
          if you wish to make any changes to your stay.
        </p>
        <a href="">
          <FaChevronRight />
          Learn more about our premium subscription
        </a>
      </div>
      <div className="room ">
        <img src={room} alt="room" />
        <div className="room-details p-3 pb-0">
          <h4 className="font-xl weight-semi text-secondary mb-2">
            The Green View
          </h4>
          <p className="mb-1 text-tertiary">
            <FaRegCheckCircle />
            Booking request recieved
          </p>
          <p className="waiting pb-2 text-highlight">
            <FaRegClock />
            Awaiting confirmation from Hotel
          </p>
          <p className="mt-2 mb-1 font-lg text-secondary weight-semi">
            Superior Premium
          </p>
          <div className="container width-side">
            <div className="row-grid">
              <div className="col-1 text-align-right pr-icon text-tertiary">
                <FaRegCalendarCheck className="verticle-middle" />
              </div>
              <div className="col-5 .column-grid">
                <div className="row-6 text-tertiary">
                  <p>Check-in:</p>
                </div>
                <div className="row-6 text-secondary weight-semi pt-icon">
                  <p>July 9th, 2018</p>
                </div>
              </div>
              <div className="col-1 text-align-right pr-icon text-tertiary">
                <FaReceipt className="verticle-middle" />
              </div>
              <div className="col-5 column-grid">
                <div className="row-6 text-tertiary">
                  <p>Receipt:</p>
                </div>
                <div className="row-6 text-secondary weight-semi pt-icon">
                  <p>#UC311K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="rate text-green">
          <FaStar />
          Rate your stay
        </Link>
        <Link to="/" className="email">
          <FaRegPaperPlane />
          Email the property
        </Link>
      </div>
    </div>
  );
};

export default Booking;
