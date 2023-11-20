import React from 'react';
import completeImg from '../assets/quiz-complete.png'
import Answer from './Answer';

function AnswersCard(props) {
    return (
        <div className='container flex flex-col mx-auto bg-purple-300 mt-9 w-1/2 items-center gap-5 text-black'>
            <div className='bg-purple-500 rounded-full border-black border-4 drop-shadow-2xl mt-5 w-36 h-36 justify-center flex items-center '>
                <img src={completeImg} className='w-20' alt="" />
            </div>

            <div>
                <h2>Quiz Completed</h2>
            </div>

            <div className='flex flex-row justify-center w-full gap-32 text-center'>

                <div className='flex flex-col'>
                    <h2>0%</h2>
                    <p>Skipped</p>
                </div>
                <div className='flex flex-col'>
                    <h2>43%</h2>
                    <p>Asnwred <br /> Completely</p>
                </div>
                <div className='flex flex-col'>
                    <h2>75%</h2>
                    <p>Asnwred <br /> Completely</p>
                </div>

            </div>

            <hr class="w-3/5 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"/>

           <Answer/>

            
            
            
        </div>
    );
}

export default AnswersCard;