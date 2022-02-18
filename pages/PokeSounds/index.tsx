import type {NextPage} from 'next'

import React, {useState, useEffect} from 'react'

//Components

import SoundButton from '../../components/PokeSounds/SoundButton'
import Options from '../../components/PokeSounds/Options'

//Style
import PokeStyle from '../../components/PokeSounds/PokeSound.module.css'

const PokeSounds : NextPage = () => {
    const [correct, setCorrect] = useState();
    const [options, setOptions] = useState([]);
    const [points, setPoints] = useState(0);
    const [mistakes, setMistakes] = useState(0);

    useEffect(() => {
        GetOptions();
    }, []);

    useEffect(() => {
        GetPokemonCry();
    }, [options]);


    const GetPokemonCry = () => {
        setCorrect(options[Math.round(Math.random()*(3 - 0))])
     
    }

    const NextRound = () => {
        GetOptions();
    }

    const Restart = () => {
        setPoints(0);
        setMistakes(0);
        GetOptions();
    }

    async function GetOptions() {
        const json = [];
        for(let i = 0; i <= 3; i++ ){
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random()*(151 - 1))}`
            );
            
            json.push(await res.json());
            
        }

        setOptions(json)
    }

    return(
        <div >
            {
              options  && (
            <div className={PokeStyle.container}>
                <SoundButton correct={correct}/>
                <Options options={options} correct={correct} points={points} mistakes={mistakes} 
                setMistakes={setMistakes} setPoints={setPoints} />  
                <div className={PokeStyle.next_container}>
                    <div>
                        <button className={PokeStyle.restart_btn} onClick={() => Restart()}>
                            RESTART
                        </button>
                        <button className={PokeStyle.next_btn} onClick={() => NextRound()}>
                            NEXT
                        </button>
                    </div> 

                    <div>
                        <p> Points: {points}</p>
                        <p> Mistakes: {mistakes} </p>
                    </div> 
                </div>
            </div>
              )  
            }
        </div>
    );
};

export default PokeSounds;