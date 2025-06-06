import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4">
      <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center animate-fadeInUp">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900">Log In</h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          Best place to buy products
        </p>
        <form className="w-full flex flex-col items-center">
            <span className="w-full flex flex-col items-left">Email:</span>
          <input
            type="email"
            placeholder="Email address" required
            className="w-full max-w-md px-6 py-3 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-teal-600 transition-all duration-200 bg-gray-100 placeholder-gray-400"
            
          /> <br />

          <span className="w-full flex flex-col items-left">Password:</span>
          <input
            type="email"
            placeholder="Enter your password" required
            className="w-full max-w-md px-6 py-3 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-teal-600 transition-all duration-200 bg-gray-100 placeholder-gray-400"
            
          />
         <div className="w-full mt-8 w-full flex flex-col sm:flex-row justify-between gap-4 px-4">
  <button className="w-full bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
    Login
  </button>
  
</div>
</form>
 <div className="w-full mt-8 flex flex-col items-center text-center gap-4 px-4">
  <p>If not Registered yet then do Register.</p> 

  <Link to="/SignUp" className="w-full max-w-md">
    <button className="w-full bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
      Sign Up
    </button>
  </Link>
</div>


      </div>
    </div>
  );
} 