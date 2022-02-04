import React from 'react'

const Entry = ({menu, legendary}) => {
    return(
        <div className={`origin-top-left 
        transform duration-300 ease-linear ${menu ? '-rotate-20' : 'rotate-0'}`} style={{backgroundColor: `${legendary.bg_color}`}}>
            <div className="flex flex-col items-center">
                <h1 className="text-center text-lg mt-8">{legendary.name}</h1>
                <img src={legendary.image} heigth={300} width={250} alt="moltres" />
            </div>
           
            <div className=" mx-12">
                <h2 className="text-xl">Biology</h2>
                <p className="text-sm py-2">
                    {legendary.biology}
                </p>
            </div>
            
        </div>
    );
};

export default Entry;