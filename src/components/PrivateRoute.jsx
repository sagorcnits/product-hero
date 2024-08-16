import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, dataLoad } = useContext(AuthContext);
  if (dataLoad) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-16 h-16  border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
