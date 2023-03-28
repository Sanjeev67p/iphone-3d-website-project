import React from 'react';
import iPhone14 from '../assets/images/iphone-14.jpg'
import HoldingPhone from '../assets/images/iphone-hand.png'

function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior:'smooth'
        })
    }

    return (
       <div className='jumbotron-section wrapper'>
            <h2 className='title'>new</h2>
            <img className='logo' src={iPhone14} alt="iPhone 14 pro" />
            <p className='text'> Big and bigger</p>
            <span className='description'> from $41.62 mo. for 24 mo. or $999 before tradein. </span>
            <ul className='links'>
                <li>
                    <button className='button'>Buy</button>
                </li>
                <li>
                    <a href='' className='link' onClick={handleLearnMore}>Learn more</a>
                </li>
                <img className='iphone-img' src={HoldingPhone} alt="iPhone" />
            </ul>
        </div>
     );
}

export default Jumbotron;