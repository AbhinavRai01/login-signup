import React from 'react'
import './style.css'

export default function OTPPage() {
  return (
    <div class="otpcard">
            <h1 id="emailconfirmation" class="font-1">Email Confirmation</h1>
            <p id="otppara" class="font-2">A code has been sent to your Email address:</p>
            <p id="dummymail" class="font-2">emailid@gmail.com</p>
            <input type="text" placeholder="Enter OTP to verify" id="OTP" class="font-1" />
            

            <button id="emailConfirmationButton" class="font-2">
               Verify
            </button>

            <div class="resendotp">
              <p class="font-2">Didn't get the OTP</p>
              <a href="###" id="Resend">Resend</a>
            </div>
              
          </div>        
  )
}
