import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn, setUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    // Sign In User
    signIn(email, password)
      .then((res) => {
        const currentUser = res.user;
        setUser(currentUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center w-11/12 mx-auto">
      <div className="py-5 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center">
          Log In Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label font-semibold text-base">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label font-semibold text-base">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
          </fieldset>
          <p className="font-semibold text-center pt-5">
            Don't Have an Account ?
            <Link to={"/auth/register"} className="ml-2 text-secondary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
