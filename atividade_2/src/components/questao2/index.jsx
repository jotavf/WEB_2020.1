import React from 'react';
import Julius from '../../images/hero.jpg';
import Malvo from '../../images/enemy.jpg';

function Hero(props){
    return(
    <div>
        <h1>{props.name}</h1>
        <img src={Julius} alt="Julius, hero"/>
    </div>
    )
}

function Enemy(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={Malvo} alt="Malvo, enemy"/>
        </div>
    )
}

function Arena(props){
    return (
        <div>
            <Hero name="Julius" />
            <Enemy name="Malvo" />
        </div>
    )
}

export {Arena, Hero, Enemy};