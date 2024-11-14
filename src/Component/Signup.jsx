import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
const Singup = () => {
    const [userData, setUserData] = useState({name : "" , email : '', password : '', confirmPassword : ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userData.password !== userData.confirmPassword){
            alert("Confirm your Password...!")
            return ;
        }
        fetch("http://localhost:4000/sign",{
            method : 'POST' , 
            body : JSON.stringify(userData),
            headers : {
                'Content-Type' :  "application/json"
            },
        }).then(res=> res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        setUserData({name : "" , email : '', password : '', confirmPassword : ''})
    };
    function handleChange(e){
      const {id , value} = e.target ; 
      setUserData({...userData , [id] : value})
    }
    
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-semibold text-center mb-6">Login or Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label> */}
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            value={userData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label> */}
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            value={userData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label> */}
                        <input
                            type="password"
                            id="password"
                            placeholder="Your Password"
                            value={userData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        {/* <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label> */}
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Your Password"
                            value={userData.confirmPassword}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
                        Submit
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link to={'/login'} className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Singup;