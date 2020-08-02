import React from 'react';

import './DrawerToogleButton.css';

const DrawerToogleButton = props =>{
    console.log(props);
    return(
        <button className="toogle-button" onClick={props.click} >
            <div className="toogle-button_line"></div>
            <div className="toogle-button_line"></div>
            <div className="toogle-button_line"></div>
        </button>
    )
}

export default DrawerToogleButton;