import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const {signIn, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email,password)

    

        signIn(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate("/")
        })
        .catch(error =>{
            console.log(error)
        })

    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-700">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex justify-end mb-6">
                    <a href="#" className="text-sm text-blue-500 hover:underline">
                        Forgot Password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>

                <button onClick={handleSignInWithGoogle} className="btn btn-primary w-full mt-2">Google</button>

                <p className="text-center text-gray-600 mt-4">
                    Dont have an account?
                    <Link to="/register">
                    <a href="#" className="text-blue-500 font-semibold hover:underline">
                        Register
                    </a></Link>
                </p>
            </form>
        </div>
    </div>

    );
};

export default Login;