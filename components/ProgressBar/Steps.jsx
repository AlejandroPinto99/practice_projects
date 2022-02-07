import React, {useState} from 'react'
import StepsStyle from './Steps.module.css'

const Steps = ({ steps }) => {
    const [count, setCount] = useState(1);
    const StepsList = []

    console.log(count);

    for (let i = 1; i <= steps; i++)
        StepsList.push(i)
    
    const handleNext = () => {
        if(count === steps)
            setCount(steps)
        else 
            setCount(count + 1);
    }

    const handlePrev = () =>{
        if(count === 1)
            setCount(1);
        else 
            setCount(count - 1);
    }

    return (
        <div>
            <div  className={StepsStyle.bar_container}>
                {
                    StepsList.length !== 0 && (StepsList.map((item, index) => {
                        return (
                            <div    key={index} 
                                    className={`${StepsStyle.steps}
                                    ${count >= (index + 1 )? 
                                        StepsStyle.active_step : 
                                        StepsStyle.unactive_space}`}
                                    style={{backgroundImage: `url(https://wallpaperaccess.com/full/45634.png)`, 
                                    backgroundSize: 'cover', 
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPositionX: '50%'}} 
                                    >
                                <p >{item}</p>
                            </div>)
                    }))
                }
                <div className={StepsStyle.empty_line}/>
                <div className={StepsStyle.filled_line} style={{width: `${((count - 1)/ (steps - 1))*100}%`}}/>
            </div>
            <div className={StepsStyle.btn_container}>
                <button className={`${StepsStyle.btn_step} ${count === 1 ? StepsStyle.unactive_btn : StepsStyle.active_btn} `}
                        onClick={() => handlePrev()}> Prev </button>
                <button className={`${StepsStyle.btn_step} ${count === steps ? StepsStyle.unactive_btn : StepsStyle.active_btn}`}
                        onClick={() => handleNext()}> Next </button>
            </div>
        </div>
    )
}

export default Steps;