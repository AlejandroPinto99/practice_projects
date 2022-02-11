import React from 'react'

//Style

import PokeStyle from './PokeSound.module.css'

const SoundButton = ({correct}) => {

    const Cry = () => {
        if(correct) {
            const cry = new Audio(`https://play.pokemonshowdown.com/audio/cries/${correct.name}.mp3`)
            cry.play();  
        }
      
    }

    return(
        <div className={PokeStyle.correct_button}>
            <button onClick={() => Cry()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="white">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
            </button>

        </div>
    );
};

export default SoundButton;