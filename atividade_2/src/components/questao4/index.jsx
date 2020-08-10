import React from 'react';
import Arena from './components/Arena';
import {Hero, Enemy} from '../questao2'

function Questao4(){
    return (
        <div>
            <Arena arena="Abilhão" >
                <Hero name="Julius" />
                <Enemy name="Malvo" />
            </Arena>    
        </div>
    )
}

export default Questao4;