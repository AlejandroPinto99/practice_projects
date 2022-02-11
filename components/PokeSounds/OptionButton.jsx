import React from 'react'

import Image from 'next/image'


const OptionButton = ({pokemon}) => {
    return(
        <div>
            {pokemon && 
            (          
                <Image src={pokemon.sprites.front_default} height={250} width={250} alt={pokemon.name}/>
            )}
        </div>
    );
};

export default OptionButton