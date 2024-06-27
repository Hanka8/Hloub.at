import axios from "axios";
import "../styles/login.css";
import { useState } from "react";
import { API } from "../variables";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginUser = async ( email:string, password:string ) => {
    const response = await axios.post(`${API}`, { email, password });
    console.log(response.data);
    return response.data;
  };

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          loginUser( email, password );
        }}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
