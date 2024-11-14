import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({email : '' , password : ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/login-user',{
            method : "POST" , 
            body : JSON.stringify(loginData),
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => alert(data.msg))
        .catch(err => console.log(err))
    };
    function handleChange(e){
      const {id , value} = e.target ; 
      setLoginData({...loginData , [id] : value})
    }
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-semibold text-center mb-6">Login to Your Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label> */}
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            value={loginData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label> */}
                        <input
                            type="password"
                            id="password"
                            placeholder="Your Password" 
                            value={loginData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <Link to={'/sign'} className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
