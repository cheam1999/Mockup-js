// import '../css/account.css';
import { FaChevronRight, FaUserEdit } from "react-icons/fa";

const Account = () => {
  return (
    <div>
      <div className="description mb-3">
        <h1 className="mb-3">Account</h1>
        <h4 className="mb-2">Your current upcoming stays</h4>
        <p className="mb-2">
          Please update with the properity if your travel plans should change or
          if you wish to make any changes to your stay.
        </p>
        <a href="/">
          <FaChevronRight />
          Learn more about our premium subscription
        </a>
      </div>
      <div className="shadow br-sm">
        <div className="container bg-white p-2 br-sm border-bottom-right border-bottom-left">
          <div className="row-grid">
            <div className="col-1 text-align-right text-tertiary">
              <FaUserEdit size={38} />
            </div>
            <div className="col-11 column-grid pl-2 pr-5">
              <div className="row-6">
                <p className="font-xl weight-semi text-secondary pb-1">
                  John Doe
                </p>
              </div>
              <div className="row-6">
                <p>
                  Please make sure these details are up to date as they’ll be
                  used for your bookings, and communications with the hotels.
                </p>
              </div>
            </div>
          </div>
        </div>
        <form action="/acc.html" className="container p-2">
          <div className="row-grid ">
            <div className="form-grid">
              <label className="name-label form_label">Your Name</label>{" "}
              <input
                type="text"
                className="form_input"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-grid">
              <label className="email-label form_label">Email address</label>{" "}
              <input
                type="email"
                className="form_input"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="row-grid form-table pb-2">
            <div className="form-grid">
              <label className="country-label form_label">Country</label>
              <select
                className="form_input"
                aria-placeholder="Select an option"
              >
                <option value="1">Thailand</option>
                <option value="2">Singapore</option>
                <option value="3">Malaysia</option>
              </select>
            </div>
            <div className="form-grid ">
              <label className="country-code-label  text-background form_label">
                Country code
              </label>
              <div className="row-grid">
                <div className="col-3">
                  <select
                    className="country-code form_input"
                    aria-placeholder="Select an option"
                  >
                    <option value="1">+66</option>
                    <option value="2">+65</option>
                    <option value="3">+60</option>
                  </select>
                </div>
                <div className="col-9">
                  <input
                    className="form_input"
                    type="number"
                    id="hp-no"
                    placeholder="(0) 053 555 555"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row-grid">
            <div className="form-grid">
              <label className="form_label">
                Current Password
                <span className="float-right font-sm weight-semi">
                  <a className="link" href="/">
                    Forgot?
                  </a>
                </span>
              </label>
              <input
                className="form_input"
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-grid">
              <label className="form_label">New Password</label>
              <input
                type="password"
                className="password form_input"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="row-grid">
            <div className="form-grid" />
            <div className="form-grid row-grid">
              <div className="col-9 pt-icon">
                <p className="pt-2 text-align-right pr-icon">
                  Your data will be{" "}
                  <span>
                    <a className="link" href="">
                      handled by care
                    </a>
                  </span>
                </p>
              </div>
              <div className="col-3">
                <input
                  className="display-i-b form_button form_input"
                  type="submit"
                  value="Update"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="height-md" />
    </div>
  );
};

export default Account;
