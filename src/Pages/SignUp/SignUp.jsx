import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const SignUp = () => {
    const {createUser,UpdateProfile}=useContext(AuthContext)
    const {register,handleSubmit,reset,formState:{errors}} =useForm()
    const navigate=useNavigate()

    const onSubmit = (data) =>{ 
        console.log(data)

        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser);
          navigate("/")
          UpdateProfile(data.name,data.photoUrl)
          .then(()=>{
            console.log("Profile Updated");
            reset()
          })
          .catch(error=>console.log("Falied To Update Profile",error))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
    }
    
    // const handleSignup = (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    
    //     console.log({ name, email, password });
       
    //   };
  
    return (
  <> 
    <Helmet><title>Register</title></Helmet>
    <div className="flex justify-center items-center h-screen bg-gray-200">
    <form onSubmit={handleSubmit(onSubmit)}
     
      className="bg-white p-8 rounded shadow-md w-full max-w-lg mx-2"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      
      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
         {...register("name",{required:true})}
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input input-bordered w-full"
          
        />
         {errors.name?.type === "required" && (
        <p role="alert" className='text-red-600'>Name is required</p>
      )}
      </div>
      
      {/* Photo Url Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Photo Url
        </label>
        <input
         {...register("photoUrl",{required:true})}
          type="url"
          name="photoUrl"
          placeholder="Enter Your Photo Url"
          className="input input-bordered w-full"
          
        />
         {errors.photoUrl?.type === "required" && (
        <p role="alert" className='text-red-600'>Name is required</p>
      )}
      </div>
      
      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
        {...register("email",{ required: "Email Address is required" })}
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
         
        />
         {errors.email && <p className='text-red-600' role="alert ">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          {...register("password",{pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,})}
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered w-full"
         required

        />
         {errors.password?.type === "pattern" && (
        <p role="alert" className='text-red-600'>Password must contain
         at least one uppercase letter, one lowercase letter, one digit,
         and be at least 8 characters long</p>
      )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 text-white"
      >
        Sign Up
      </button>

      {/* Divider */}
      <div className="text-center text-sm text-gray-500 my-4">OR</div>

      {/* Google Signup Button */}
      <button
        type="button"
      
        className="btn w-full bg-red-500 hover:bg-red-600 text-white"
      >
        Sign Up with Google
      </button>
        {/* Extra Links */}
        <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to={"/login"} 
               className="text-primary hover:underline">
                Login Now
              </Link>
            </p>
          </div>
    </form>
  </div>
  </>
  )
}
