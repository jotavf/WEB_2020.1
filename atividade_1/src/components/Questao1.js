import React from 'react';

// function Id() {
//     return(
//       <div>
//           <h1>João Victor Falcão</h1>
//           <h1>Eng. de Software</h1>
//           <h1>Quixeramobim</h1>
//       </div>
//     );
// }

// funções \/
function Name(){
    return(
        <h1>João Victor Falcão</h1>
    );
}

function Course(){
    return(
        <h1>Eng. de Software</h1>
    );
}

function City(){
    return(
        <h1>Quixeramobim</h1>
    );
}

function AllFunc() {
    return(
        <div>
            <Name />
            <Course />
            <City />
        </div>
    );
}

export default AllFunc;