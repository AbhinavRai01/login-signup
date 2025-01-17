import { ClerkProvider, useSignIn, SignInButton } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import LoginPage from "./components/Login page/LoginPage";
import SignUpPage from './components/SignUp page/SignUp';
import OTPPage from './components/OPTPage/OTPPage';


const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const App = () => (
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper CurrentComponent={<LoginPage />} />} />
        <Route path="/signup/*" element={<Wrapper CurrentComponent={<SignUpPage />} />} />
        <Route path="/otp/*" element={<Wrapper CurrentComponent={<OTPPage />} />} />
      </Routes>
    </Router>
  </ClerkProvider>

);

export default App;
