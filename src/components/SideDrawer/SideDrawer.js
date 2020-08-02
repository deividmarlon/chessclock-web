import React from 'react';

import './SideDrawer.css';  
import {Link} from "react-router-dom";

const SideDrawer = props =>{
    let drawerClasses = 'side-drawer';

    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/portifolio">Portifiolio</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul> 
        </nav>
    )
}

export default SideDrawer;