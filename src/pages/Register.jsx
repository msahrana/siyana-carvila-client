import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router-dom";


const Register = () => {

  const {createUser} = useContext(AuthContext)

    const handleSingUp = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const photo = form.photo.value 
        const email = form.email.value 
        const password = form.password.value 
        console.log(name, photo, email, password)
        createUser(email, password)
        .then(result =>{
            if (password.length < 8) {
                toast.error('Password must be at least 8 characters')
                return;
            }else{
                Swal("Good job!", "You successfully Registered!", "success");
            }
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
      <div>
      <h2 className="text-2xl font-semibold mb-6 my-10  text-center">Please Register </h2>
      <form onSubmit={handleSingUp} className="border w-1/4 mx-auto">
          <div className="form-control">
              <label className="label">
                  <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
           </div>
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
          </div>
          <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">Sign Up</button>
          </div>
          <p className="text-center mt-4 mb-4">Already have an account: <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
          <SocialLogin></SocialLogin>
      </form>
  </div>
    );
};

export default Register;