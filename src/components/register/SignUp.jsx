import React, { useState } from 'react';
import { SetSignUp } from '../../config/api';
import { useNavigate } from 'react-router';
import MainNavbar from '../navbar/MainNavbar';

function SignUp() {
  const [fullname, SetFullname] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const navigate = useNavigate();

  async function SignUpValue() {
    const res = await SetSignUp({ email, password, fullname });
    console.log(res);
  }

  function handleFullname(e) {
    SetFullname(e.target.value);
  }

  function handleEmail(e) {
    SetEmail(e.target.value);
  }

  function handlePassword(e) {
    SetPassword(e.target.value);
  }

  return (
    <>
      <MainNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>

          <div>
            <label htmlFor="fullName" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your name"
              className="w-full p-3 rounded border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFullname}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleEmail}
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handlePassword}
            />
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold transition"
            // onClick={SignUpValue}
          >
            Submit
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{' '}
            <span
              className="text-blue-600 hover:underline cursor-pointer font-medium"
              onClick={() => navigate('/login')}
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
