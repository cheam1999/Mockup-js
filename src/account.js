import './css/account.css';
import { FaChevronRight,FaUserEdit } from "react-icons/fa";
function Account() {
    return ( 
        <div className="account-body">
            <div className="description">
                <h1>Account</h1>
                <h4>Your current upcoming stays</h4>
                <p>Please update with the properity if your travel plans should change or if you wish to make any changes to your stay.</p>
                <a href="/"><FaChevronRight />Learn more about our premium subscription</a>
            </div>
            <div className="form-box">
                <table className="name-table">
                    <thead>
                    <tr>
                        <th className="user-edit" rowSpan="2">
                            <FaUserEdit size={32}/>
                        </th>
                        <th className="table-name">John Doe</th>        
                    </tr>
                    <tr><td>Please make sure these details are up to date as they’ll be used for your bookings, and communications with the hotels.</td></tr>    
                    </thead>                            
                </table>
                <form action="/acc.html">
                    <table className="form-table">
                        <tbody>
                            <tr>
                                <td><label className="name-label">Your Name</label> <input type="text" id="name" placeholder="Enter your name" required/></td>
                                <td><label className="email-label">Email address</label> <input type="" id="email" placeholder="Enter your email" required/></td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="country-label">Country</label> 
                                    <select aria-placeholder="Select an option">
                                        <option value="1">Thailand</option>
                                        <option value="2">Singapore</option>
                                        <option value="3">Malaysia</option>
                                    </select>
                                </td>
                                <td>
                                    <label className="country-code-label">Country code</label> 
                                    <select className="country-code" aria-placeholder="Select an option">
                                        <option value="1">+66</option>
                                        <option value="2">+65</option>
                                        <option value="3">+60</option>
                                    </select>
                                    <input type="number" id="hp-no" placeholder="(0) 053 555 555" required/>                                
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="password-table">
                        <tbody>
                            <tr>
                                <td>
                                    <label className="pw-label">Current Password<span><a href="/">Forgot?</a></span></label>
                                    <input type="password" id="password" placeholder="Password" required/>
                                </td>
                                <td>
                                    <label className="pw-label">New Password</label>
                                    <input type="password" className="password" placeholder="Password" required/>
                                </td>
                            </tr>
                            <tr className="update">
                                <td></td>
                                <td>
                                    <p>Your data will be <span><a href=""> handled by care</a></span></p>
                                    <input className="btn" type="submit" value="Update"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>                            
                </form>
            </div>
        </div>
    );
}
 
export default Account;