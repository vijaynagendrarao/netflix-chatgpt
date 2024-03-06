import { useState } from 'react';
import Header from './Header';


const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/fa6f97d9-245e-43d7-bb56-af27cbf6d656/US-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
                <h1 className="font-bold text-3xl py-4
                ">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && (<input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-500 rounded-lg"></input>)}
                <input type="text" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-500 rounded-lg"></input>
                <input type="password" placeholder="Password" className="p-2 my-2 w-full  bg-gray-500 rounded-lg"></input>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
};

export default Login;