import { createContext , useState ,useRef } from "react";
import Questions from "../Questions.js";

export const TurnContext = createContext({
    turn:1,
    state:'notClicked',
    clickedAnswer:'',
    isAnswerCorrect:false,
    incrementTurn: ()=>{},
    checkAnswer: ()=>{},
    showAnswer:()=>{}
});

export default function TurnContextProvider({children}){

    let score = useRef(0);

    const [turnState, setTurnState] = useState({
        turn:1,
        state:'notClicked',
        clickedAnswer: '',
        isAnswerCorrect:false
    });

    function handleNextQuestion(){
        setTurnState(prev => {
            let newTurn = prev.turn+1;
            return ({
                ...prev,
                turn:newTurn,
                state:'notClicked'
            
            });
        });
    }

    function handleButtonClick(answer){
        

        if(Questions[turnState.turn - 1].correctAnswer == answer)
        {
            score.current += 1;
            setTurnState(prevTurnState => {
                return({
                    ...prevTurnState,
                    state:'clicked',
                    clickedAnswer:answer,
                    isAnswerCorrect:true
                });
            })
        }
        else{
            setTurnState(prevTurnState => {
                return({
                    ...prevTurnState,
                    state:'clicked',
                    clickedAnswer:answer,
                    isAnswerCorrect:false
                });
            })
        }

        
    }

    function showAnswer(){
        setTurnState(prevTurnState => {
            return(
                {
                    ...prevTurnState,
                    state:'showAnswer'
                }
            )
        });
    }

    const ctxValue = {
        turn : turnState.turn,
        state:turnState.state,
        clickedAnswer:turnState.clickedAnswer,
        isAnswerCorrect:turnState.isAnswerCorrect,
        incrementTurn:handleNextQuestion,
        checkAnswer:handleButtonClick,
        showAnswer:showAnswer
    }

    console.log('new T' + turnState.turn);
    return (
        <TurnContext.Provider value={ctxValue}>
            {children}
        </TurnContext.Provider>
    );
}