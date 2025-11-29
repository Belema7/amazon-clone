import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/amazon.avif';
import { auth } from '../../components/Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../components/DataProvider/DataProvider';
import { Type } from '../../components/Utility/action.type';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{user}, dispatch] = useContext(DataContext)

  console.log(user)

  // Sign In handler
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user
      })
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  // Sign Up handler
  const handleSignUp = async () => {
    try {
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user
      })
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4">
      <section className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-gray-300 p-6">

        {/* Logo */}
        <Link to="/" className="flex justify-center mb-6">
          <img src={logo} alt="amazon logo" className="h-16 w-auto" />
        </Link>

        {/* Form */}
        <div className="border border-gray-300 rounded-md p-5 bg-white">
          <h1 className="text-2xl font-normal text-gray-900 mb-4">Sign in</h1>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email or mobile phone number
              </label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-2 rounded-md shadow-sm transition-all duration-200 hover:shadow-md mb-4"
            >
              Continue
            </button>
          </form>

          {/* Agreement */}
          <p className="text-xs text-gray-600 mb-4">
            By continuing, you agree to Amazon's <Link to="/conditions" className="text-blue-600 hover:text-orange-700 hover:underline">Conditions of Use</Link> and <Link to="/privacy" className="text-blue-600 hover:text-orange-700 hover:underline">Privacy Notice</Link>.
          </p>

          {/* Help Section */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-blue-600 hover:text-orange-700 cursor-pointer hover:underline">
              Need help?
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center my-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="shrink mx-4 text-xs text-gray-500 bg-white px-2">New to Amazon?</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* Create Account Button */}
        <button 
          type="button"
          onClick={handleSignUp}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 rounded-md border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-md"
        >
          Create your Amazon account
        </button>

        {/* Footer Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center text-xs text-blue-600">
            <Link to="/conditions" className="hover:text-orange-700 hover:underline">Conditions of Use</Link>
            <Link to="/privacy" className="hover:text-orange-700 hover:underline">Privacy Notice</Link>
            <Link to="/help" className="hover:text-orange-700 hover:underline">Help</Link>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </section>
    </div>
  );
};

export default Auth;
