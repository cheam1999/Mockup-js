import '../css/account.css';
import { FaChevronRight,FaUserEdit } from "react-icons/fa";

const Account = () => {
        return ( 
                <div className="account-body">
                        <div className="description">
                                <h1>Account</h1>
                                <h4>Your current upcoming stays</h4>
                                <p>Please update with the properity if your travel plans should change or if you wish to make any changes to your stay.</p>
                                <a className='with_icon link' href="/"><FaChevronRight />Learn more about our premium subscription</a>
                        </div>
                        <div className="form-box">
                                <table className="name-table">
                                        <thead>
                                                <tr>
                                                        <th className="user-edit" rowSpan="2">
                                                            <FaUserEdit size={32}/>
                                                        </th>
                                                        <th className="table-name font_bold">John Doe</th>        
                                                </tr>
                                                <tr><td>Please make sure these details are up to date as they’ll be used for your bookings, and communications with the hotels.</td></tr>    
                                        </thead>                            
                                </table>
                                <form action="/acc.html">
                                        <table className="form-table">
                                                <tbody>
                                                        <tr>
                                                                <td><label className="name-label form_label">Your Name</label> <input type="text" className='form_input' placeholder="Enter your name" required/></td>
                                                                <td><label className="email-label form_label">Email address</label> <input type="email" className='form_input' placeholder="Enter your email" required/></td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <label className="country-label form_label">Country</label> 
                                                                        <select className='form_input' aria-placeholder="Select an option">
                                                                                <option value="1">Thailand</option>
                                                                                <option value="2">Singapore</option>
                                                                                <option value="3">Malaysia</option>
                                                                        </select>
                                                                </td>
                                                                <td>
                                                                        <label className="country-code-label form_label">Country code</label> 
                                                                        <select className="country-code form_input" aria-placeholder="Select an option">
                                                                                <option value="1">+66</option>
                                                                                <option value="2">+65</option>
                                                                                <option value="3">+60</option>
                                                                        </select>
                                                                        <input className='form_input' type="number" id="hp-no" placeholder="(0) 053 555 555" required/>                                
                                                                </td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                        <table className="password-table">
                                                <tbody>
                                                        <tr>
                                                                <td>
                                                                        <label className="pw-label form_label">Current Password<span className='span_right'><a className='link' href="/">Forgot?</a></span></label>
                                                                        <input className='form_input' type="password" id="password" placeholder="Password" required/>
                                                                </td>
                                                                <td>
                                                                        <label className="pw-label form_label">New Password</label>
                                                                        <input type="password" className="password form_input" placeholder="Password" required/>
                                                                </td>
                                                        </tr>
                                                        <tr className="update">
                                                                <td></td>
                                                                <td>
                                                                        <p >Your data will be <span><a className='link' href=""> handled by care</a></span></p>
                                                                        <input className="btn form_button form_input" type="submit" value="Update"/>
                                                                </td>
                                                        </tr>
                                                </tbody>
                                        </table>                            
                                </form>
                                
                        </div>
                        <div className="bottom_space" />
                </div>
        );
}
 
export default Account;