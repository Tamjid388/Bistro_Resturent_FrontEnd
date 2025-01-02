
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

export const Login = () => {
    const [disabled,setDisabled]=useState(true)
    useEffect(()=>{
       loadCaptchaEnginge(2)
    },[])
   const captchaRef=useRef(null)
    const handleValidateCaptcha=()=>{
         const captcha_value=captchaRef.current.value
       if(validateCaptcha(captcha_value)){
          setDisabled(false)
       
       }else{
          setDisabled(true)
       }
    }
    const handleLogin=(e)=>{
     e.preventDefault()
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log({email,password});
    }
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg mx-2">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Login Now</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
  
            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Captcha Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" >
         <LoadCanvasTemplate></LoadCanvasTemplate>
              </label>
              <input ref={captchaRef}
                type="text"
               
                name="captcha"
                placeholder="Type The Captcha Above"
                className="input input-bordered w-full"
                required
              />
              <button onClick={handleValidateCaptcha}
              className="btn mt-2 btn-outline btn-xs">Validate</button>
            </div>
  
  

            {/* disabled={disabled} */}

            {/* Submit Button */} 
            <div>
              <button  type="submit" className=" btn btn-primary w-full">
                Login
              </button>
            </div>
  
            {/* Extra Links */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="text-primary hover:underline">
                  Register Now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  };
  