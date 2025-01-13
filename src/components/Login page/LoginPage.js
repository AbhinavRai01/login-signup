import React, { use } from 'react'
import './style.css'
import { ClerkProvider, useSignIn, SignInButton } from "@clerk/clerk-react";
import {useNavigate} from 'react-router-dom'   
import AlertBox from '../AlertBox/AlertBox';
import { useState } from 'react'; 

export default function LoginPage() {

    const navigate = useNavigate();
    const [message, setMessage] = useState(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(""); 

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
  
      const handleEmailSubmit = async () => {
      //Checking if all fields are filled correctly or not......
        if (!(email && password)) {
          setMessage("Please fill all fields");
          return;
        }
  
        if (!validateEmail(email)) {
          setMessage("Invalid Email");
          return;
        }

        //Code for submit button goes here......
    }
  

    return (
        <div class="logincard">

            {message && <AlertBox message={message} type="error" />}
            
            <h1 id="logintext" class="font-1">Login</h1>
            <div class="signup">
                <h3 id="newuser" class="font-2">New user?</h3>
                <h3 id="signup" class="font-2"><span style={{color : "rgb(74, 74, 231)", cursor: "pointer"}} onClick={() => navigate('/signup')}>sign up</span></h3>
            </div>
            <input type="email" class="font-2" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" class="font-2" placeholder="Password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button id="loginbutton" class="font-2" onClick={handleEmailSubmit}>
                Login
            </button>
            <div class="orboundary">
                <div class="or1"></div>
                <p id="or" class="font-2">or</p>
                <div class="or2"></div>
            </div>
            <SignInButton mode="modal">
                    <button id="googlebutton" class="googlesignin">
                        <img src="images/icons8-google-logo-48.png" alt="img" />
                        <p class="font-2">Sign Up with Google</p>
                    </button>
            </SignInButton>


        </div>
    )
}
