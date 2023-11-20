import React from 'react';
import { useContext } from 'react';
import { TurnContext } from '../Store/Turn-Context';


function Question({question}) {

    let isDisabled = false;

    const {incrementTurn,state,checkAnswer,clickedAnswer,isAnswerCorrect} = useContext(TurnContext);

    let classes = 'w-full py-3 text-center rounded-full';

    if(state == 'showAnswer' && clickedAnswer == question)
    {
        if(isAnswerCorrect)
        {
            classes +=  ' bg-green-500 text-white';
            isDisabled= true;
        }
        else{
            classes +=  ' bg-red-700 text-white';
            isDisabled= true;
        }
    }
    if(state == 'showAnswer')
    {
        classes +=  ' bg-blue-300 text-gray-600';
            isDisabled= true;
    }
    else if(state == 'clicked' && clickedAnswer == question){
        classes += ' bg-progressAnswered text-gray-600';
        isDisabled= true;
    }
    else if(state == 'clicked')
    {
        classes += ' bg-blue-300 text-gray-600';
        isDisabled= true;
    }
    else{
        classes += ' bg-blue-300 text-gray-600 hover:bg-btnHover hover:text-white';
    }

    return (

            <button onClick={() => checkAnswer(question)} disabled={isDisabled}   className={classes}>{question}</button>

  
        
    );
}

export default Question;