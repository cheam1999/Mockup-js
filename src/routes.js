import { Routes, Route } from "react-router-dom";
import Booking from "./containers/booking";
import Account from "./containers/account";
import Refer from "./containers/refer.js";
import Contact from "./containers/contact.js";
import FAQ from "./containers/faq.js";

const All_Routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Account />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route exact path="/refer" element={<Refer />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/faq" element={<FAQ />} />
        </Routes>
    );
};

export default All_Routes;
