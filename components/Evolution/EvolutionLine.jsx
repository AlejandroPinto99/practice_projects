import React from 'react'
import Image from 'next/image'

const EvolutionLine = ({pokemon, pokemonPos}) => {
    return(
        <div className="flex space-x-12">
            {
                pokemon.map((item, index) => (
                    <div className="flex items-center justify-center" key={index}>
                        <div key={index} className={`pr-8 transition duration-300 ease-in-out ${pokemonPos >= index ? 'opacity-100': 'opacity-0'}`}>
                            <p className="text-center pb-2">{item.name}</p>
                            <Image src={item.image} alt={item.name} height={100} width={100}/>
                        </div>
                        <div className={`h-6 w-6  transition duration-300 ease-in-out
                        ${pokemon.length - 1 === index ? 'hidden': 'visible'} 
                        ${pokemonPos >= index + 1 ? 'opacity-100' : 'opacity-0'}`} >

                            <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <p className="text-xs text-center"> level {item.evolves}</p>
                        </div>
                       
                    </div>
                ))
            }
        </div>
    );
};

export default EvolutionLine;