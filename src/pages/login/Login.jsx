import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider";

const Login = () => {
  const { loginUser, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success Your Login",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "warning",
          title: "Worng Email/Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Success Your Login",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Product hero - Login</title>
      </Helmet>
      <div className="flex justify-center items-center login-screen">
        <div className="flex flex-col w-[450px] p-6 rounded-md sm:p-10 bg-[#ebe8e8]">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-600">
              Sign in to access your account
            </p>
          </div>
          <form className="space-y-12" onSubmit={handleSubmit(submit)}>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  placeholder="email or number"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.email && (
                  <p className="text-red-500">Your Email Invalid</p>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Password</label>
                </div>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.password && (
                  <p className="text-red-500">Your Email password</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md button"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-3 space-x-4 hover:bg-black duration-500 hover:text-white rounded-md mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          <p className="px-6 pt-2 text-sm text-center dark:text-gray-600">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-bgColor font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
