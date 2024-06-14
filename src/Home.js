import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './Style.css';

const Home = () => {

    const [email1, setEmail1] = useState("");
    const [password1, setPassword1] = useState("");
    const [email2, setEmail2] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();
    const [error1, setError1] = useState(null);
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email1, password1);
            console.log(userCredential);
            alert("Sign Up sucessfull");
        } catch (error1) {
            setError1(error1.message);
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email2, password2);
            navigate('/num', { state: { email: userCredential.user.email } })
            console.log(userCredential);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='home-container'>
            <h2>Number Guessing Game</h2>
            <div className='container'>
                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <input type='email' value={email1} onChange={(s) => setEmail1(s.target.value)} placeholder='Email' required />
                    <input type='password' value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder='Password' required />
                    <button type='submit'>Sign Up</button>
                </form>
                {error1 && <p className='error'>{error1}</p>}
            </div>
            <div className='container'>
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <input type='email' value={email2} onChange={(s) => setEmail2(s.target.value)} placeholder='Email' required />
                    <input type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Password' required />
                    <button type='submit'>Sign In</button>
                </form>
                {error && <p className='error'>{error}</p>}
            </div>


        </div>

    );
}

export default Home;
