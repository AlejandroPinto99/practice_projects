import type {NextPage} from 'next'

import React, {useState, useEffect} from 'react'

//Components

import SoundButton from '../../components/PokeSounds/SoundButton'
import Options from '../../components/PokeSounds/Options'

//Style
import PokeStyle from '../../components/PokeSounds/PokeSound.module.css'

const PokeSounds : NextPage = () => {
    const [correct, setCorrect] = useState();
    const [options, setOptions] = useState([''])

    useEffect(() => {
        GetPokemonCry();
        GetOptions();
    }, []);


    async function GetPokemonCry() {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random()*(151 - 1) + 1)}`
        );
            
        const json = await res.json();   
        
        setCorrect(json);
    }

    async function GetOptions() {
        const json = [];
        for(let i = 0; i <= 2; i++ ){
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random()*(151 - 1) + 1)}`
            );
            
            json.push(await res.json());
            
        }

        setOptions(json)
    }

    return(
        <div className={PokeStyle.container}>
            <SoundButton correct={correct}/>
            <Options correct={correct} w1={options[0]} w2={options[1]} w3={options[2]} /> 

        </div>
    );
};

export default PokeSounds;