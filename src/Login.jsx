import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email === 'quickieapp3@gmail.com' && password === 'quickieapprrbrothers333') {
      navigate('/admin/dashboard');
    } else {
      setError('Unauthorized Access: Only the main administrator can log in.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white w-full max-w-[420px] p-10 rounded-2xl shadow-xl border border-gray-100">
        {/* Branding */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-5xl font-bold tracking-tight mb-8">
            <span className="text-gray-900">QUICKIE</span>
          </h1>
          <h2 className="text-[32px] font-medium text-gray-900 mb-2">Login</h2>
          <p className="text-gray-500 text-sm text-center">Welcome to the Quickie Admin Delivery Console.</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-base font-medium text-gray-900 mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-[#FF5722] focus:border-[#FF5722] focus:outline-none transition-colors text-[15px] bg-white placeholder-gray-400"
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-base font-medium text-gray-900 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-11 pr-11 py-3 border border-gray-300 rounded-lg focus:ring-[#FF5722] focus:border-[#FF5722] focus:outline-none transition-colors text-[15px] bg-white placeholder-gray-400"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Options: Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-1 pb-2">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-[18px] w-[18px] text-[#FF5722] focus:ring-[#FF5722] border-gray-300 rounded mb-0.5 accent-[#FF5722] cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2.5 block text-[15px] font-medium text-gray-800 cursor-pointer">
                Remember me
              </label>
            </div>

            <div className="text-[14px]">
              <a href="#" className="font-semibold text-[#FF5722] hover:text-[#e64a19] transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3.5 px-4 rounded-lg shadow-sm text-[18px] font-semibold text-white bg-[#FF5722] hover:bg-[#e64a19] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5722] transition-all"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
