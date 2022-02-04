import React, {useState} from 'react'

import Entry from './Entry'
import RotateMenu from './RotateMenu'
import Nav from './Nav'

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
            <div className="absolute -top-8 -left-10">
                <RotateMenu menu={menu} setMenu={setMenu} legendary={legendary} />
            </div>
            <Entry menu={menu} legendary={legendary}/>
            <div className={`absolute bottom-4 transition ease-in-out  ${ menu ? 'delay-300 translate-x-6': '-translate-x-20'}`}>
                <Nav legendaries={LegendaryBirds} setLegendary={setLegendary} setMenu={setMenu}/>
            </div>
        </div>
    )
}

export default Article