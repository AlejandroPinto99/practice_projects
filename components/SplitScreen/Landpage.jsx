import React from 'react'

import Tournament from './Tournament'

import Style from './Landpage.module.css'

const Landpage = () => {

    if(process.browser){
        const left = document.querySelector('.Landpage_left__e_P7X');
        const right = document.querySelector('.Landpage_right__zhDWb');
        const container = document.querySelector('.Landpage_container__12lUi');

        console.log("Left: ", left, " Right: ", right, " container: ", container);

        left.addEventListener('mouseenter', () => container.classList.add('Landpage_hover_left__0wlEz'));
        left.addEventListener('mouseleave', () => container.classList.remove('Landpage_hover_left__0wlEz'));
        right.addEventListener('mouseenter', () => container.classList.add('Landpage_hover_right__ouaYN'));
        right.addEventListener('mouseleave', () => container.classList.remove('Landpage_hover_right__ouaYN'));
    }

    return(
        <div className={`${Style.container}`}>
            <div>
                <Tournament 
                name="Pokemon World Championship" 
                className={`${Style.split} ${Style.left}`} />
            </div>

            <div>
                <Tournament name="Pokemon Trading Card Game Championship"
                 className={`${Style.split} ${Style.right}`}
                />
            </div>
        </div>
    );
};

export default Landpage;