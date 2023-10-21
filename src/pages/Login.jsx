import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";


const Login = () => {

  const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('located in login page',location)

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password)
        signIn(email,password)
        .then(result =>{
            if (password.length < 8) {
                toast.error('Password must be at least 8 characters')
            }
            else{
                Swal("Good job!", "You successfully Registered!", "success");
            }
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error)
        })
    }

  return (
    <div className="bg-emerald-50">
        <h2 className="text-4xl text-orange-400 font-semibold mb-10 pt-10  text-center">Please Login Now!</h2>
          <form onSubmit={handleLogin} className="border w-1/4 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">Login</button>
            </div>
            <p className="text-center mt-4 mb-10">Do not have an account: <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
            <SocialLogin></SocialLogin>
        </form>
    </div>
  );
};

export default Login;
