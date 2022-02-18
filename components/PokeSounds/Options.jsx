import React, {useState, useEffect} from 'react';

import OptionButton from './OptionButton'

//Styles
import Styles from './PokeSound.module.css'

const Options = ({options, correct, points, setPoints, mistakes, setMistakes}) => {
    const [selection, setSelection] = useState();
    const [answer, setAnswer] = useState();

    useEffect(() => {
        if(correct)
            VerifySeleccion();
    }, [selection]);

    useEffect(() => {
        if(options)
            setSelection(null)
    }, [options])

    const VerifySeleccion = () => {
        if(correct.name === selection){
            setAnswer(true);
            setPoints(points + 1);
        } else
        {
            setAnswer(false);
            setMistakes(mistakes + 1);
        }
    }
    
    return(
        <div>
            {
                options && correct && (
                <div id="options_container" className={Styles.options_container}>
                    {
                    options.map((option, index) => {
                        return(
                            <button key={index} className={`${Styles.card_container} 
                            ${selection && correct.name === option.name ? Styles.answer_right : ''}`}
                                onClick={() => setSelection(option.name)}>
                                <OptionButton pokemon={option} />
                            </button>
                            )
                        }
                    )
                    }
                </div>
                )
            
            }

        </div>
        
    )
};

export default Options;