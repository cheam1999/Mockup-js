import { useState } from "react";
import { FaChevronRight, FaKey } from "react-icons/fa";
import loginImage from "../image/signIn.png";

const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
    };

    return (
        <div className="container">
            <div className="row-grid justify-flex-start">
                <div className="col-4 bg-white column-grid">
                    <div className="row-6 p-3 pt-4 pb-0">
                        <div className="bg-highlight height-md width-md br-xs shadow transform svg-white ">
                            <FaKey className="height-sm width-sm transform icon" />
                        </div>
                        <h1 className="weight-semi font-xl mt-2 text-secondary">
                            Hi there!
                        </h1>
                        <p className="mt-2 mb-2">
                            Sign in to manage your listings and booking requests
                            on Nomad Rental
                        </p>
                        <a className="mb-2" href="/">
                            <FaChevronRight />
                            Learn more about our premium subscription
                        </a>
                    </div>
                    <div className="bg-background row-6 p-3 pt-2">
                        <form onSubmit={submitHandler}>
                            <label htmlFor="email-label" className="form_label">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form_input"
                                placeholder="Email"
                                value={details.email}
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                            <label
                                className="pw-label form_label"
                                htmlFor="pw-label"
                            >
                                Password{" "}
                                <span className="float-right font-sm weight-semi">
                                    <a href="">Forget your password?</a>
                                </span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form_input"
                                placeholder="Password"
                                value={details.password}
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        password: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                className="form_button form_input"
                                type="submit"
                                value="Sign In"
                            />
                        </form>
                        {error !== "" ? (
                            <div className="text-error">{error}</div>
                        ) : (
                            ""
                        )}
                        <div className="text-align-center">
                            <p>
                                Don’t have an account?{" "}
                                <span>
                                    <a className="weight-semi" href="/">
                                        Sign up now
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    src={loginImage}
                    className="img col-8 height-full"
                    alt=""
                />
            </div>
        </div>
    );
};

export default LoginForm;
