import React from 'react'
import Image from 'next/image'

//Styling
import RotateStyle from './Rotate.module.css'

const Entry = ({menu, legendary}) => {
    return(
        <div className={`${RotateStyle.entry_container} ${menu ? RotateStyle.open_menu : RotateStyle.close_menu}`} style={{backgroundColor: `${legendary.bg_color}`}}>
            <div className={RotateStyle.header_container}>
                <h1 >{legendary.name}</h1>
                <Image src={legendary.image} height={350} width={350} alt={legendary.name} />
            </div>
           
            <div className={RotateStyle.information} >
                <h2 >Biology</h2>
                <p className="text-sm py-2">
                    {legendary.biology}
                </p>
            </div>
            
        </div>
    );
};

export default Entry;