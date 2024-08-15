import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center login-screen">
      <div className="flex flex-col w-[480px]  rounded-md px-6 py-4 bg-[#ebe8e8]">
        <div className=" text-center">
          <h1 className="text-4xl font-bold">Register</h1>
          <p className="text-sm pt-2">Register your account</p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Number</label>
              <input
                type="number"
                name="number"
                placeholder="number"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="5-digit PIN"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md button"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-[17px]">
              Don't have an account yet? {" "}
              <Link to="/login" className="text-bgColor font-semibold">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
