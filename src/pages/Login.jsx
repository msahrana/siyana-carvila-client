import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


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
    <div className="hero min-h-screen bg-lime-50 -my-36">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-500">Please Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
