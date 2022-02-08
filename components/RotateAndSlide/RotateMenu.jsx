import React from 'react'
import Image from 'next/image'

import RotateStyle from './Rotate.module.css'

const RotateMenu = ({menu, setMenu, legendary}) => {
    return(
        <div className={RotateStyle.rotate_btn}
            style={{backgroundColor: `${legendary.btn_color}`}}
            onClick={() => setMenu(!menu)}>
            <div >
                <Image src={legendary.icon} 
                height={100} width={100} alt="fire"/>
            </div>
           
        </div>
    )
}
export default RotateMenu;