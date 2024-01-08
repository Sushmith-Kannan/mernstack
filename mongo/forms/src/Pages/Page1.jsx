import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Page1() {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const Submit = (e) =>{
e.preventDefault();
        axios.post("http://127.0.0.1:3001/createUser",{email,password}).then(result=>console.log(result)).catch(err=>console.log(err))
    }

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </label>
          <input
          id='email'
            type="form-control"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Your password
          </label>
          <input
          id='password'
            type="form-control"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        
        <Link to="/page2">
          <button type="button" onClick={Submit}>Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default Page1;
