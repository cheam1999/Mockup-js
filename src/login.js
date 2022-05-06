import './css/signIn.css';
import { useState } from 'react';
import { FaChevronRight,FaKey } from "react-icons/fa";
import loginImage from './image/signIn.png';


function LoginForm({Login,error}){
    const [details,setDetails] = useState({email:"",password:""});
    

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
        
    }

    return ( 
        <div className="body">
            <div className='sidebar'>
                <div className="upper">
                    <div className="key">
                        <FaKey />
                    </div>
                    <div className="desc">
                        <h1>Hi there!</h1>
                        <p>Sign in to manage your listings and booking requests on Nomad Rental</p>
                        <a href="/"><FaChevronRight />Learn more about our premium subscription</a>
                    </div>
                </div>
                <div className="form">
                
                    <form onSubmit={submitHandler}>
                        
                        <label htmlFor="email-label">Email address</label> 
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            value={details.email}
                            onChange={e => setDetails({...details, email:e.target.value})}
                            required/>
                        <label className="pw-label" htmlFor="pw-label">Password <span><a href="">Forget your password?</a></span></label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password" 
                            value={details.password}
                            onChange={e => setDetails({...details, password:e.target.value})}
                            required/>
                        <input className="btn" type="submit" value="Sign In"/>
                    </form>
                    {(error !== "") ? (
                            <div className="error">
                                {error}
                            </div>
                        ) : "" }
                    <div className="footer">
                        <p>Don’t have an account? <span><a href="/">Sign up now</a></span></p>
                    </div>
                </div>
            </div>
            <img src={loginImage} className='img' alt=""/>
        </div>
        
     );
}
 
export default LoginForm;