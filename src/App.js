import React, { useState } from "react";
import { ClerkProvider, useSignIn, SignInButton } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import LoginPage from "./components/Login page/LoginPage";
import SignUpPage from './components/SignUp page/SignUp';
import OTPPage from './components/OPTPage/OTPPage';


const clerkPublishableKey = "pk_test_Y29ycmVjdC1wZWxpY2FuLTc0LmNsZXJrLmFjY291bnRzLmRldiQ";

const App = () => (
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <Router>
      <Routes>
        <Route path="/login/*" element={<Wrapper CurrentComponent={<LoginPage />} />} />
        <Route path="/signup/*" element={<Wrapper CurrentComponent={<SignUpPage />} />} />
        <Route path="/otp/*" element={<Wrapper CurrentComponent={<OTPPage />} />} />
      </Routes>
    </Router>
  </ClerkProvider>

);



const EmailPage = () => {
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

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const { isLoaded, signIn } = useSignIn();

  const handleOtpSubmit = async () => {
    if (!isLoaded) return;
    try {
      const response = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code: otp,
      });
      console.log("Login successful:", response);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Enter OTP</h1>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleOtpSubmit}>Verify OTP</button>
    </div>
  );
};

export default App;
