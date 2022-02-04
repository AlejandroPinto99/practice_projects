import React from 'react'

const Card = ({name, imgUrl, onClick, selected}) => {

    return(
        <div style={{
                backgroundImage: `url(${imgUrl})`, 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat',
            }}
            className={`transition-all duration-700 w-72 md:h-96 rounded-lg cursor-pointer  
            ${selected === name ? 'md:w-64 h-96' : 'md:w-24 h-30'}`}
            onClick={onClick}
                >
            <p className={`transition-all  text-white pl-4 py-2 font-bold 
            ${selected === name ? 'opacity-100 delay-700 bg-black bg-opacity-50' : 'opacity-0'}`}>{name} Region</p>
        </div>
    );
}

export default Card;