import React , {useContext , useEffect, useState , useRef} from 'react';
import { TurnContext } from '../Store/Turn-Context';

const QUESTION_TIME = 5000;
const CLICKED_TIME = 1000;
const ANSWER_TIME = 2000;

function ProgressBar({className}) {

    const {turn,state,incrementTurn,showAnswer} = useContext(TurnContext);

    const [remainingTime, setRemainingTime] = useState(QUESTION_TIME);

    

    useEffect(()=>{

        const interval = setInterval(()=>{
            setRemainingTime(prevTime => prevTime - 10);
        },10);

        return () => clearInterval(interval);

    },[turn]);

    useEffect(()=>{

        if(state == 'notClicked')
        {
            setRemainingTime(QUESTION_TIME);
            const timerNotClicked = setTimeout(()=>{
                
                incrementTurn();
            },QUESTION_TIME);

            return () => clearTimeout(timerNotClicked);
        }
        else if(state == 'clicked')
        {
            setRemainingTime(CLICKED_TIME);
            const timerClicked = setTimeout(()=>{
                
                showAnswer();
            },CLICKED_TIME);     

            return () => clearTimeout(timerClicked);
        }
        else if(state == 'showAnswer')
        {
            setRemainingTime(ANSWER_TIME);

            const timerAnswer = setTimeout(()=>{
                
                incrementTurn();
            },ANSWER_TIME);     

            return () => clearTimeout(timerAnswer);
        }
        

       

    },[turn,state]);


    let classes = className;
    if(state == 'clicked')
    {
        classes += ' answered';
    }
    

    return (

            <progress className={classes} value={remainingTime} max={state=='notClicked'?QUESTION_TIME:state == 'clicked' ? CLICKED_TIME : ANSWER_TIME}></progress>
       
    );
}

export default ProgressBar;