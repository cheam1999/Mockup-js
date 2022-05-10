import '../css/booking.css';
import { FaChevronRight, FaRegCheckCircle, FaRegClock, FaRegCalendarCheck, FaReceipt, FaStar, FaRegPaperPlane } from "react-icons/fa";
import room from '../image/room.png';
import { Link } from 'react-router-dom';

const Booking = () => {
        return (
                <div className="booking-body" >
                        <div className='description'>
                                <h1>Bookings</h1>
                                <h4>Review and update your account details</h4>
                                <p>Please make sure these details are up to date as they’ll be used for your bookings, and communications with the hotels.</p>
                                <a className='link with_icon' href=""><FaChevronRight />Learn more about our premium subscription</a>
                        </div>
                        <div className="room ">
                                <img src={room} alt="room" />
                                <div className="room-details with_icon">
                                        <h4>The Green View</h4>
                                        <p><FaRegCheckCircle />Booking request recieved</p>
                                        <p className="waiting"><FaRegClock />Awaiting confirmation from Hotel</p>
                                        <p className="superior font_bold">Superior Premium</p>
                                        <table>
                                                <tbody>
                                                        <tr>
                                                                <th className="icon" rowSpan="2">
                                                                        <FaRegCalendarCheck />
                                                                </th>
                                                                <th className="title">Check-in:</th>
                                                                <th className="icon" rowSpan="2"><FaReceipt /></th>
                                                                <th className="title">Receipt:</th>
                                                        </tr>
                                                        <tr className="details-bold font_bold">
                                                                <td>July 9th, 2018</td>
                                                                <td>#UC311K</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </div>
                                <Link to='/' className="rate link font_bold with_icon"><FaStar />Rate your stay</Link>
                                <Link to='/' className="email link with_icon font_bold"><FaRegPaperPlane />Email the property</Link>
                        </div>
                </div>
        );
}

export default Booking;