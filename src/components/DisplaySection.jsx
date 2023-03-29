import React from "react";

function DisplaySection() {
    
    const handleTop = () => {
        const element = document.querySelector(".nav-wrapper");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior:'smooth'
        });
    }

    return ( 
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brilliant.</p>
            <span className="description">
                A disppplay that's upto 2x brighter than te sun.
            </span>
            <button className="button">Try me!</button>
            <button className="back-button" onClick={handleTop}>TOP</button>
        </div>
    );
}

export default DisplaySection;