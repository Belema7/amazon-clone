import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/amazon.avif';
import { auth } from '../../components/Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../components/DataProvider/DataProvider';
import { Type } from '../../components/Utility/action.type';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();


  // Sign In handler
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, signIn: true });
    setError("");

    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user
      });
      setEmail("");
      setPassword("");
      navigate(navStateData?.state?.redirect || "/"); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({ ...loading, signIn: false });
    }
  };

  // Sign Up handler
  const handleSignUp = async () => {
    setLoading({ ...loading, signUp: true });
    setError("");

    try {
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user
      });
      setEmail("");
      setPassword("");
      navigate(navStateData?.state?.redirect || "/"); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({ ...loading, signUp: false });
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

          {/* Show error message */}
          {error && <p className="text-xs text-red-600 mb-2">{error}</p>}
          { navStateData?.state?.msg && (
              <small>
                  <span className="text-xs text-blue-600">
                    {navStateData?.state?.msg}
                  </span>
              </small>
          )
          }

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
              disabled={loading.signIn}
              className={`w-full ${loading.signIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#ffd814] hover:bg-[#f7ca00]'} text-gray-900 font-medium py-2 rounded-md shadow-sm transition-all duration-200 hover:shadow-md mb-4`}
            >
              {loading.signIn ? "Please wait..." : "Continue"}
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
          disabled={loading.signUp}
          className={`w-full ${loading.signUp ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'} text-gray-900 font-medium py-2 rounded-md border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-md`}
        >
          {loading.signUp ? "Please wait..." : "Create your Amazon account"}
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
