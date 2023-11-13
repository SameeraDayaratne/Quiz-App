import React from 'react';

function Header() {
    return (
        <div className=' mt-10 container flex flex-col mx-auto items-center gap-6'>
            <img className='w-14' src="quiz-logo.png" alt="" />
            <h1 className='uppercase text-purple-500 font-bold text-4xl font'>React Quiz</h1>
        </div>
    );
}

export default Header;