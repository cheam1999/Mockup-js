import { useState } from "react";
import Layout from "./containers/layout";
import LoginForm from "./containers/login";

const App = () => {
  const adminUser = {
    email: "test@test.com",
    password: "1234",
  };

  const [user, setUsername] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setUsername({
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <Layout />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default App;
