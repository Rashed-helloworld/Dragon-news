import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, photoUrl, email, password });
    // Create User
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
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
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label font-semibold text-base">Name</label>
            <input
              type="name"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            {/* photoURL */}
            <label className="label font-semibold text-base">Photo URL</label>
            <input
              type="text"
              name="photourl"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* Email */}
            <label className="label font-semibold text-base">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* Password */}
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
              Register Account
            </button>
          </fieldset>
          <p className="font-semibold text-center pt-5">
            Already Have An Account ? Please
            <Link to={"/auth/login"} className="text-secondary ml-2">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
