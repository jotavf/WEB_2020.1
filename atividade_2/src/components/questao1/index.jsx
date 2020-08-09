import React from 'react';

function Hero(props){
    return(
    <div>
        <h1>{props.name}</h1>
        <img src="https://noticiasdatv.uol.com.br/media/_versions/everybody-hates-chris-julius-dia-dos-pais_fixed_big.jpg" alt="Julius, hero"/>
    </div>
    )
}

function Enemy(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <img src="https://tvhistoria.com.br/wp-content/uploads/2020/04/todomundochris-060719-malvo.jpg" alt="Malvo, enemy"/>
        </div>
    )
}

function Arena(){
    return (
        <div>
            <p>Arena: Abilhão</p>
            <Hero name="Julius" />
            <Enemy name="Malvo" />
        </div>
    )
}

export default Arena;