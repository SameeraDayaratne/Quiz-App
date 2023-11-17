import React from 'react';
import { useContext } from 'react';
import { TurnContext } from '../Store/Turn-Context';


function Question({question}) {

    const {incrementTurn,state} = useContext(TurnContext);

    let classes = 'w-full py-3 text-center text-gray-600 rounded-full hover:bg-btnHover hover:text-white';

    if(state == 'notClicked')
    {
        classes += ' bg-blue-300';
    }
    else if(state == 'clicked')
    {
        classes += ' bg-yellow-600';
    }

    return (

            <button onClick={incrementTurn}  className={classes}>{question}</button>

  
        
    );
}

export default Question;