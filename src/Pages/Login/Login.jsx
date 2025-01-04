import { useContext, useEffect,  useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {signIn}=useContext(AuthContext)
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname || "/"


  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);

  
  const handleValidateCaptcha = (e) => {
    const captcha_value = e.target.value;
    if (validateCaptcha(captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    signIn(email,password)
    .then(resut=>{
      const loggeduser=resut.user;
      console.log(loggeduser);
      Swal.fire({
        title: "Login In Successfull!",
        icon: "success",
        draggable: true
      });
      navigate(from,{replace:true});
      
    })
    .catch((error)=>{
      console.log(error);
      Swal.fire({
        title: "Login Failed",
        text: error.message,
        icon: "error",
        draggable: true
      });
    })
  };
  // Passw0rd1

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Link to={"/"} className="btn btn-lg btn-primary">Back To Home</Link>
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg mx-2">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Login Now
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
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
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <LoadCanvasTemplate></LoadCanvasTemplate>
            </label>
            <input
          
              onBlur={handleValidateCaptcha}
              type="text"
              name="captcha"
              placeholder="Type The Captcha Above"
              className="input input-bordered w-full"
              required
            />
         
          </div>

          {/*  */}

          {/* Submit Button */}
          <div>
            <button disabled={disabled} type="submit" className=" btn btn-primary w-full">
              Login
            </button>
          </div>

          {/* Extra Links */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to={"/signUp"} 
               className="text-primary hover:underline">
                Register Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
