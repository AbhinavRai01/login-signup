import React from 'react'
import './style.css'

export default function LoginPage() {
    return (
        <div class="logincard">
            <h1 id="logintext" class="font-1">Login</h1>
            <div class="signup">
                <h3 id="newuser" class="font-2">New user?</h3>
                <h3 id="signup" class="font-2"><a href="#">sign up</a></h3>
            </div>
            <input type="email" class="font-2" placeholder="Email" id="email" />
            <input type="password" class="font-2" placeholder="Password" id="Password" />

            <button id="loginbutton" class="font-2">
                Login
            </button>
            <div class="orboundary">
                <div class="or1"></div>
                <p id="or" class="font-2">or</p>
                <div class="or2"></div>
            </div>
            <a href="@@@" id="googlebutton">
                <div class="googlesignin">
                    <img src="images/icons8-google-logo-48.png" alt="img" />
                    <p class="font-2">Sign in with Google</p>
                </div>
            </a>


        </div>
    )
}
