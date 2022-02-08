import React from 'react'
import Image from 'next/image'

const Nav = ({legendaries, setLegendary, setMenu}) => {

    const handleSelection = (item) => {
        setLegendary(item);
        setMenu(false)
    }

    return(
        <div >
           {
                legendaries.map((item, index) => (
                <div className=" hover:animate-bounce" key={index}>
                    <Image key={index} 
                    className="cursor-pointer" 
                    src={item.sprite} 
                    height={75} 
                    width={75} 
                    alt={item.name} 
                    onClick={() => handleSelection(item)}
                    />
                </div> ))
           }
        </div>
    );
}

export default Nav;