import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
// import 'sweetalert2/src/sweetalert2.scss'
import Swal from "sweetalert2";



const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
        
    }else if (!user){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Create an User first",
           
          });
    }
    return <Navigate to="/login">Login</Navigate>
};

export default PrivateRoute;