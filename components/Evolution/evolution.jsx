import React, {useState, useEffect} from 'react'

import EvolutionLine from './EvolutionLine'

import {mareep} from './mareep'

const evolution = () => {
    const [level, setLevel] = useState(0)
    const [start, setStart] = useState(false);
    const [pokemon, setPokemon] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        if(level <= 100 && start)
          setLevel(level++); 
        if(mareep[pokemon].evolves + 1 === level)
            setPokemon(pokemon + 1)
     
        }, 300);
        return () => clearInterval(interval);
      }, [start, pokemon]);
    
    
    const restart = () => {
        setLevel(0);
        setStart(false);
        setPokemon(0);
    }
    
    return(
        <div className="flex flex-col justify-start items-center h-screen ">
            <div className="flex justify-center my-14">
                <EvolutionLine pokemon={mareep} pokemonPos={pokemon}/>
            </div>
         
            <div className="flex flex-col justify-center items-center">
                <p>Level {level}</p>
                <div className="flex space-x-4 pt-2">
                    <button className="border-2 bg-green-400 px-2 py-1 rounded-lg" onClick={()=>setStart(true)}>LEVEL UP</button>
                    <button className="border-2 bg-orange-400 px-2 py-1 rounded-lg" onClick={() =>restart()}>RESTART</button>
                </div>
            </div>

            
           
        </div>
    )
}

export default evolution;
