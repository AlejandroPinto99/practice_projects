import React, {useState, useEffect} from 'react'
import OptionButton from './OptionButton'

//Styles
import Styles from './PokeSound.module.css'

const Options = ({correct, w1, w2, w3}) => {
    const [selection, setSelection] = useState();
    const [answer, setAnswer] = useState();

    useEffect(() => {
        if(correct)
            VerifyAnswer();
    }, [selection])

    const VerifyAnswer = () => {
        if(selection === correct.name){
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    return(
        <div>
            {
                w1 && (
                    <div className={Styles.options_container}>
                    <button className={`${Styles.card_container} ${selection ? Styles.answer_right : ''}`}  
                    onClick={() => setSelection(correct.name)}>
                        <OptionButton pokemon={correct} />
                    </button>
                    <button className={`${Styles.card_container} ${selection === w1.name ? Styles.answer_wrong: ''}`} 
                    onClick={() => setSelection(w1.name)}>
                        <OptionButton pokemon={w1}  />
                    </button>
                    <button className={`${Styles.card_container} ${selection === w2.name ? Styles.answer_wrong: ''}`} 
                    onClick={() => setSelection(w2.name)}>
                        <OptionButton pokemon={w2}  />
                    </button>
                    <button className={`${Styles.card_container} ${selection === w3.name ? Styles.answer_wrong: ''}`} 
                    onClick={() => setSelection(w3.name)}>
                        <OptionButton pokemon={w3}  /> 
                </button>
            </div>   
                )
            }

        </div>
        
    )
};

export default Options;