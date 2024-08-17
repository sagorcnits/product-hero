import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/AuthProvider";
import { auth } from "../../firebase_config";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const name = data.name;
    const email = data.email;
    const photo_url = data.photo_url;
    const password = data.password;
    // const userData = { name, email, number, password };

    createUser(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo_url,
        })
          .then((res) => {
            // console.log(res);
            Swal.fire({
              icon: "success",
              title: "Your Register Success",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
            setTimeout(() => {
              navigate("/home");
            }, 2000);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Product hero - Register</title>
      </Helmet>
      <div className="flex justify-center items-center login-screen">
        <div className="flex flex-col w-[480px]  rounded-md px-6 py-4 bg-[#ebe8e8]">
          <div className=" text-center">
            <h1 className="text-4xl font-bold">Register</h1>
            <p className="text-sm pt-2">Register your account</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(submit)}>
            <div className="space-y-2">
              <div>
                <label className="block mb-2 text-sm">Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.name && (
                  <p className="text-red-500">Invalid Your Name</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.email && (
                  <p className="text-red-500">Invalid Your email</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm">Number</label>
                <input
                  {...register("photo_url", { required: true })}
                  type="text"
                  name="photo_url"
                  placeholder="photo_url"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
                {errors.photo_url && (
                  <p className="text-red-500">Invalid Your URL</p>
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
                  <p className="text-red-500">Invalid Your password</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md button"
                >
                  Register
                </button>
              </div>
              <p className="px-6 text-sm text-center text-[17px]">
                Don't have an account yet?{" "}
                <Link to="/login" className="text-bgColor font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
