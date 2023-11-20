import React from 'react';

function Answer(props) {
    return (
        <div className='flex flex-col gap-5 items-center mb-10'>
        <div className='w-8 h-8 rounded-full bg-black flex justify-center items-center text-white'>
            <h2>1</h2>
        </div>
        <h2>Question</h2>
        <h2>Answer</h2>
    </div>
    );
}

export default Answer;