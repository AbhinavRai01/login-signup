import React from 'react'
import './style.css'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ClerkProvider, useSignIn, SignInButton } from "@clerk/clerk-react";
import AlertBox from '../AlertBox/AlertBox';

export default function SignUpPage() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState(null);

    const { isLoaded, signIn } = useSignIn();
    const navigate = useNavigate(); 

    //Validating Email for new user......
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    const handleEmailSubmit = async () => {
    //Checking if all fields are filled correctly or not......
      if (!(email && password && confirmPassword)) {
        setMessage("Please fill all fields");
        return;
      }

      if (!validateEmail(email)) {
        setMessage("Invalid Email");
        return;
      }

      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }

      //Code for submit button goes here......

    }




    {/*

      ....THIS DOESNT WORK RIGHT NOW....

    const handleEmailSubmit = async () => {
        if (!isLoaded) return;
        try {
            const response = await signIn.create({
                identifier: email,
            });
            console.log("OTP sent:", response);
            navigate("/otp"); // Navigate to OTP page
        } catch (error) {
            console.error("Error sending OTP:", error);
        }
    };

    */}

    return (

        <div class="logincard">
          {message && <AlertBox message={message} type="error" />}
            <h1 id="logintext" class="font-1">Sign Up</h1>
            <div class="signup">
                <h3 id="newuser" class="font-2">Already a user?</h3>
                <h3 id="signup" class="font-2"><span style={{color : "rgb(74, 74, 231)", cursor: "pointer"}} onClick={() => navigate('/login')}>Log in</span></h3>
            
            </div>
            <input type="email" placeholder="Email" id="email" class="font-2" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" id="Password" class="font-2" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder=" Confirm Password" id="Password" class="font-2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <button id="loginbutton" class="font-1" onClick={handleEmailSubmit}>
                Sign Up
            </button>
            <div class="orboundary">
                <div class="or1"></div>
                <p id="or">or</p>
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



{/*
  ....ORIGINAL TEMPLATE GIVEN BY PRAYANSH BHAIYA.....
  
  <div class="logincard">

export default EmailPage = () => {
    const [email, setEmail] = useState("");
    const { isLoaded, signIn } = useSignIn();
    const navigate = useNavigate(); // Hook to navigate to the next page
  
    const handleEmailSubmit = async () => {
      if (!isLoaded) return;
      try {
        const response = await signIn.create({
          identifier: email,
        });
        console.log("OTP sent:", response);
        navigate("/otp"); // Navigate to OTP page
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    };
  
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Sign Up or Login</h1>
        <div style={{ marginBottom: "20px" }}>
          <SignInButton mode="modal">
            <button>Sign in with Google</button>
          </SignInButton>
        </div>
        <div>
          <h3>Or, use your email:</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleEmailSubmit}>Send OTP</button>
        </div>
      </div>
    );
  };

*/}
