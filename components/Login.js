import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./Login.module.css";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const loginHandle = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth", {
        username,
        password,
      });
      router.push("/");
      alert("now you can use admin features!");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <h1>Admin Login Page</h1>
        <div className={classes.inpContainer}>
          <input
            placeholder="username"
            className={classes.input}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className={classes.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={loginHandle}>Sign In</button>
          {error && <span className={classes.error}>Wrong Credentials!</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;
