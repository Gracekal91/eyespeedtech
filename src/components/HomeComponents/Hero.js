import React from 'react'
import './HomeComponents.scss'
import Navigation from './Navigation'

const Hero = () => {
    return (

        <div className='hero'>
            <Navigation />
            <div className="heroContent">
                <h1>SMART ENGINERING SOLUTIONFOR YOUR BUSINESS</h1>
                <p>Powered by Greign Tech</p>
                <button className='btn heroBtn'>Learn More</button>
            </div>
        </div>


    )
}

export default Hero
