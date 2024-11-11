import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </div>
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
                <div className="flex items-center mb-6">
                    <input
                        type="checkbox"
                        id="terms"
                        className="mr-2"
                    />
                    <label htmlFor="terms" className="text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Terms and Conditions
                        </a>
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"

                >
                    Register
                </button>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account ?
                    <Link to="/login">
                    <a href="#" className="text-blue-500 font-semibold hover:underline">
                        Login
                    </a></Link>
                </p>
            </form>
        </div>
    </div>
    );
};

export default Register;