import React from 'react'
import './style.css'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ClerkProvider, useSignIn, SignInButton } from "@clerk/clerk-react";

export default function SignUp() {
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

        <div class="logincard">
            <h1 id="logintext" class="font-1">Sign Up</h1>
            <div class="signup">
                <h3 id="newuser" class="font-2">Already a user?</h3>
                <h3 id="signup" class="font-2"><Link To='../login'>Login</Link></h3>
            
            </div>
            <input type="email" placeholder="Email" id="email" class="font-2" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" id="Password" class="font-2" />
            <input type="password" placeholder=" Confirm Password" id="Password" class="font-2" />

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

{/* <div class="logincard">

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
