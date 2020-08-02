import React from 'react';
import './Toolbar.css';
import {Link} from "react-router-dom";

const Toolbar = props => {
    return(
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo">
                    <a href="/">CHESS CLOCK</a>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;