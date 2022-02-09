import React from 'react'
import Image from 'next/image'

const PokeCard = (name, img, num) => {
    return(
        <div>
            <h1>{name}</h1>
            <Image src={img} height={100} width={150} alt={name}/>
            <p># {num}</p>
        </div>
    )
}

export default PokeCard;