
import './App.css';
import Home from './Home';
import CheckKey from './CheckKey';
import RedeemMS from './RedeemMS';
import Office365 from './Office365'
import APIs from './APIs';
import MyAccount from './MyAccount';
import ContactUs from './ContactUs';
import SignUp from './SignUp';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
      <Routes> 
        <Route path="/" element={<Home />}  />
        <Route path="/check-key" element={<CheckKey/>}  />
        <Route path="/redeem-ms" element={<RedeemMS/>} />
        <Route path="/office365" element={<Office365/>} />
        <Route path="/apis" element={<APIs/>} />
        <Route path="/my-account" element={<MyAccount/>} />
        <Route path="/contuct-us" element={<ContactUs/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
