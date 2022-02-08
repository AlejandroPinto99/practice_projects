import React, {useState} from 'react'

import Entry from './Entry'
import RotateMenu from './RotateMenu'
import Nav from './Nav'

//Styles
import RotateStyle from './Rotate.module.css'

import {LegendaryBirds}  from './LegendaryTrios'

const Article = () => {
    const [menu, setMenu] = useState(false);
    const [legendary, setLegendary] = useState(LegendaryBirds[0])

    return(
        <div style={{
            backgroundImage: 'url(https://cdn.wallpapersafari.com/26/82/41PKyd.jpg)',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
        }}>
            <div className={RotateStyle.menu_container}>
                <RotateMenu menu={menu} setMenu={setMenu} legendary={legendary} />
            </div>
            <Entry menu={menu} legendary={legendary}/>
            <div className={`${RotateStyle.nav_btn_container} ${ menu ? RotateStyle.nav_showed : RotateStyle.nav_hidden}`}>
                <Nav legendaries={LegendaryBirds} setLegendary={setLegendary} setMenu={setMenu}/>
            </div>
        </div>
    )
}

export default Article