import React from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import { TurnContext } from '../Store/Turn-Context';
import { useContext } from 'react';
import Questions from '../Questions.js';

function QuestionsCard(props) {

    const {turn} = useContext(TurnContext);
   
    // console.log('The turn is '+turnCtx.turn);

    return (
        <div id='question' className='container flex flex-col gap-3 p-10 w-2/5 mt-6 items-center drop-shadow-lg mx-auto bg-darkPurple rounded-xl  '>
            <ProgressBar className="progress"></ProgressBar>
            <h2 className='  text-center text-white'>{Questions[turn-1].text}</h2>
            
            <div className='flex flex-col w-full items-center gap-3'>
            
            {Questions[turn-1].answers.map(answer => {
                return(<Question key={answer} question={answer} ></Question>)
            })}


            
            {/* <Question></Question>
            <Question></Question>
            <Question></Question> */}
            </div>
            
        </div>  
    );
}

export default QuestionsCard;