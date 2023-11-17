import React from 'react';
import { useContext } from 'react';
import { TurnContext } from '../Store/Turn-Context';


function Question({question}) {

    const {incrementTurn,state,checkAnswer} = useContext(TurnContext);

    let classes = 'w-full py-3 text-center text-gray-600 bg-blue-300 rounded-full hover:bg-btnHover hover:text-white focus:bg-yellow-600 focus:text-white';

    return (

            <button onClick={() => checkAnswer(question)}   className={classes}>{question}</button>

  
        
    );
}

export default Question;