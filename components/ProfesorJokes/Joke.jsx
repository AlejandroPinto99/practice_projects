import React, {useState, useEffect} from 'react'

import Stylejoke from './Joke.module.css'

const Joke = () => {
    const [joke, setJoke] = useState("Default joke goes here");

    useEffect(() => {
        GetJoke();
    }, [])

    async function GetJoke() {    
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch(`https://icanhazdadjoke.com`, config);
            
    const json = await res.json();
         

    setJoke(json.joke)
    }

    return(
        <div>
            <p  className={Stylejoke.joke}>{joke}</p>
            <button id="btn_joke" className={Stylejoke.btn}
                    onClick={() => GetJoke()}>
                Get another joke
            </button>
        </div>
    );
};

export default Joke;