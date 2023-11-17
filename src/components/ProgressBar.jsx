import React , {useContext , useEffect, useState , useRef} from 'react';
import { TurnContext } from '../Store/Turn-Context';

const QUESTION_TIME = 5000;

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

        
        setRemainingTime(QUESTION_TIME);
        const timer = setTimeout(()=>{
            
            incrementTurn();
        },QUESTION_TIME);

        return () => clearTimeout(timer);

    },[turn]);


    let classes = className;

    return (

            <progress className={classes} value={remainingTime} max={QUESTION_TIME}></progress>
       
    );
}

export default ProgressBar;