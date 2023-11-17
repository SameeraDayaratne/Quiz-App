import React , {useContext , useEffect, useState , useRef} from 'react';
import { TurnContext } from '../Store/Turn-Context';

const QUESTION_TIME = 5000;
const CLICKED_TIME = 1000;

function ProgressBar({className}) {

    const {turn,state,incrementTurn} = useContext(TurnContext);

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
                
                incrementTurn();
            },CLICKED_TIME);     

            return () => clearTimeout(timerClicked);
        }
        

       

    },[turn,state]);


    let classes = className;
    if(state == 'clicked')
    {
        classes += ' answered';
    }
    

    return (

            <progress className={classes} value={remainingTime} max={state=='notClicked'?QUESTION_TIME:CLICKED_TIME}></progress>
       
    );
}

export default ProgressBar;