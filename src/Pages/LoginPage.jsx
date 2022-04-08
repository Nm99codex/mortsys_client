import React from 'react'
import { useParams } from 'react-router-dom'
import SignIn from '../Assets/User_login/SignIn'
import SignUp from '../Assets/User_login/SignUp';
import SignUp2 from '../Assets/User_login/SignUp2';

function LoginPage() {
    const { type } = useParams();
    return (
        <>
        <div>
            {type === "signIn" && <SignIn/>}
            {type === "signUp" && <SignUp/>}
            {type === "signUp2" && <SignUp2/>}
        </div>
        </>
    )
}
export default LoginPage