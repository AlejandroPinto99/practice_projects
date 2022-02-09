import React from 'react'

import Style from './Landpage.module.css'

const Tournament = ({name, className}) => {
    return(
        <div className={className}>
            <h1>{name}</h1>
            <a href="#" className={Style.btn}>Sign in</a>
        </div>
        
    );
};

export default Tournament;
