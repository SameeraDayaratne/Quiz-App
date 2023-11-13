import React from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';

function QuestionsCard(props) {
    return (
        <div id='question' className='container flex flex-col gap-3 p-10 w-2/5 mt-6 items-center drop-shadow-lg mx-auto bg-darkPurple rounded-xl  '>
            <ProgressBar className="progress"></ProgressBar>
            <h2 className='  text-center text-white'>Question</h2>

            <div className='flex flex-col w-full items-center gap-3'>
            <Question></Question>
            <Question></Question>
            <Question></Question>
            <Question></Question>
            </div>
            
        </div>  
    );
}

export default QuestionsCard;