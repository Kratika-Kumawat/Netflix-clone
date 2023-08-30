import React from 'react'
import "./Nav.css"
import { useState } from 'react';

function Nav() {

    const [show, handleShow] = useState(false);
    useState(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" 
            src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt = "Netflix Logo" />

        </div>
    );
}

export default Nav
