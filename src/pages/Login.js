import React from "react";
import { auth, provider } from "../Firebase-Config";

const Login = ({ setIsAuth }) => {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true)
            setIsAuth(true)
        })
    }

    return (
        <div className="loginPage">
            <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn">Sign in with Google</button>
        </div>
    );
}
 
export default Login;