import React from 'react'
import Image from 'next/image'

const RotateMenu = ({menu, setMenu, legendary}) => {
    return(
        <div    className="bg-blue-400 rounded-full max-w-max p-14 relative z-10 cursor-pointer "
                style={{backgroundColor: `${legendary.btn_color}`}}
                onClick={() => setMenu(!menu)}>
            <Image src={legendary.icon} 
            height={50} width={50} alt="fire" 
            className="absolute bottom-4 right-4"/>
        </div>
    )
}
export default RotateMenu;