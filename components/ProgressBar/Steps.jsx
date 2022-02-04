import React, {useState} from 'react'

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
            <div className="relative flex justify-between items-center mt-24 mx-12">
                {
                    StepsList.length !== 0 && (StepsList.map((item, index) => {
                        return (
                            <div    key={index} 
                                    className={` rounded-full transition border-4 px-2 z-10 bg-white ${count >= (index + 1 )? 'border-red-600 delay-500 animate-spin animation-delay-500' : 'border-gray-300 opacity-70'}`}
                                    style={{backgroundImage: `url(https://wallpaperaccess.com/full/45634.png)`, 
                                    backgroundSize: 'cover', 
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPositionX: '50%'}} 
                                    >
                                <p className="invisible">{item}</p>
                            </div>)
                    }))
                }
                <div className="absolute z-0 h-1 bg-gray-300 left-0" style={{width: "100%"}}/>
                <div className="absolute transition-all duration-700 ease-in-out z-0 h-1 bg-red-600 left-0" style={{width: `${((count - 1)/ (steps - 1))*100}%`}}/>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
                <button className={`border-2 py-2 px-4 rounded-lg text-white bg-red-600 ${count === 1 ? 'bg-opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-red-700'} `}
                        onClick={() => handlePrev()}> Prev </button>
                <button className={`border-2 py-2 px-4 rounded-lg text-white bg-red-600 ${count === steps ? 'bg-opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-red-700'}`}
                        onClick={() => handleNext()}> Next </button>
            </div>
        </div>
    )
}

export default Steps;