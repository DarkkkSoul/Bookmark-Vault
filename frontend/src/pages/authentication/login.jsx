import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(()=>{
        if(message){
            setTimeout(()=>{
                setMessage('');
            }, 2000)
        }
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            
            const response = await fetch('http://localhost:5000/api/v1/auth/login', {
                method:"POST",
                body:JSON.stringify({email,password}),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if(response.ok){
                setMessage(data.message);
            } else{
                setMessage(data.errorMessage);
            }

        } catch (error) {
            console.error("Error during signUp: ", error);
            setMessage("Network Error, try again later.");
        }
    }

  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="text-black font-semibold py-2 px-6 rounded-lg duration-200 bg-gradient-to-br from-purple-500 via-blue-200 to-pink-500 tracking-wider hover:scale-105 transition-all shadow-2xl hover:shadow-black active:scale-90"
          >
            Sign Me In!
          </button>
        </form>

        {message && <p>{message}</p>}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login