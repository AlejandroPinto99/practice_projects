import React from 'react'
import CardStyle from './ExpandingStyle.module.css'

const Card = ({name, imgUrl, onClick, selected}) => {

    return(
        <div style={{
                backgroundImage: `url(${imgUrl})`, 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat',
            }}
            className={`${selected === name ? CardStyle.card_style_selected : CardStyle.card_style }`}
            onClick={onClick}>
                <p className={`${CardStyle.region_text}`}>{name} Region</p>
        </div>
    );
}

export default Card;