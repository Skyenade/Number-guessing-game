import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { signOut } from 'firebase/auth';


const NumberCounter = () => {
    const [number,setNumber] = useState(Math.floor(Math.random() * 100));
    const [guess,setGuess] = useState();
    const [count,setCount] = useState(0);
    const [guessText,setGuessText] = useState();
    const ref = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email;

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleGuess = () =>{
        if (guess > number){
            setGuessText("Too  high! Try again.")
            let numcount = count;
            setCount(numcount+1);
            console.log("count" + count);
            console.log(number);
        } else if (guess < number){
            setGuessText("Too  Low! Try again.")
            let numcount = count;
            setCount(numcount+1);
            console.log("count" + count);
            console.log(number);
        } else {
            setGuessText("Congratulations! You guessed the correct number.")
            console.log("count" + count);
            console.log(number);
            let score = count;
        }
    };

    const handleReset = () => {
        setCount(0);
        setGuess(null);
        setGuessText('');
        setNumber(Math.floor(Math.random() * 100));
        ref.current.value = '';
    };

    return(
        <div className='home-container'>
            <h2>Number Guessing Game</h2>
            <h5>Number Guessing Game</h5>
            <p>Guess a number between 1 and 100</p>
            <input type='number' ref={ref} onChange={(e) => setGuess(e.target.value)}></input>
            <button onClick={handleGuess}>Guess</button>
            <span >{guessText}</span>
            <p value={count}>Attemps: {count}</p>

            <button onClick={handleReset}>Reset Game</button>
            <button onClick={handleSignOut} >Sign Out</button>

        </div>
    );
}

export default NumberCounter;