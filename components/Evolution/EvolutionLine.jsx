import React from 'react'
import Image from 'next/image'

//Style
import EvolutionStyle from './Evolution.module.css'

const EvolutionLine = ({pokemon, pokemonPos}) => {
    return(
        <div className={EvolutionStyle.evolution_container}>
            {
                pokemon.map((item, index) => (
                    <div className={EvolutionStyle.pokemon_container} key={index}>
                        <div key={index} className={`${EvolutionStyle.image_container} ${pokemonPos >= index ? 'opacity-100': 'opacity-0'}`}>
                            <p>{item.name}</p>
                            <Image src={item.image} alt={item.name} height={100} width={100}/>
                        </div>
                        <div className={`${EvolutionStyle.arrow_container}
                        ${pokemon.length - 1 === index ? 'hidden': 'visible'} 
                        ${pokemonPos >= index + 1 ? 'opacity-100' : 'opacity-0'}`} >

                            <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <p> level {item.evolves}</p>
                        </div>
                       
                    </div>
                ))
            }
        </div>
    );
};

export default EvolutionLine;