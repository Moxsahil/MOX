import React, { useState, useContext } from 'react';
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from '../context/userContext';

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) =>  {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
    }

    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate('/home');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100 p-4">
      {/* Main Content */}
      <div className="flex flex-col items-center mt-10">
        <form onSubmit={submitHandler}>
          <h1 className="text-lg font-semibold mb-4">Sign Up</h1>
          
          {/* First Name Field */}
          <div className="flex items-center border rounded-lg overflow-hidden mb-4 w-full max-w-sm">
            <div className="flex items-center bg-gray-100 px-3">
              <span className="text-sm">First Name</span>
            </div>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              type="text"
              placeholder="Enter your first name"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>

          {/* Last Name Field */}
          <div className="flex items-center border rounded-lg overflow-hidden mb-4 w-full max-w-sm">
            <div className="flex items-center bg-gray-100 px-3">
              <span className="text-sm">Last Name</span>
            </div>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              type="text"
              placeholder="Enter your last name"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border rounded-lg overflow-hidden mb-4 w-full max-w-sm">
            <div className="flex items-center bg-gray-100 px-3">
              <span className="text-sm">E-mail</span>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border rounded-lg overflow-hidden mb-4 w-full max-w-sm">
            <div className="flex items-center bg-gray-100 px-3">
              <span className="text-sm">Password</span>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter your password"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded-lg font-medium mb-4 max-w-sm hover:bg-orange-500 hover:text-white transition-all duration-300">
            Create Account
          </button>
        </form>
        
        <div className="text-center text-gray-500 text-sm mb-4 max-w-sm">or</div>
        
        <div className="w-full flex flex-col gap-2 max-w-sm">
          <Link to="/login" className="flex items-center justify-center border py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
            Already have an account?
            <img src="already.svg" alt="Sign In" className="w-5 h-5 mr-2" />
          </Link>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-xs text-gray-500 justify-center mt-4 py-4">
        <p>
          By proceeding, you consent to get calls, WhatsApp, or SMS messages,
          including by automated means, from MOX and its affiliates to the
          number provided.
        </p>
        <p className="mt-2 justify-center">
          This site is protected by reCAPTCHA and the Google
          <a href="#" className="text-blue-500 underline ml-1">Privacy Policy</a> and
          <a href="#" className="text-blue-500 underline ml-1">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
