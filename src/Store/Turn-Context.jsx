import { createContext , useState } from "react";

export const TurnContext = createContext({
    turn:1,
    state:'notClicked',
    incrementTurn: ()=>{}
});

export default function TurnContextProvider({children}){

    const [turnState, setTurn] = useState({
        turn:1,
        state:'notClicked'
    });

    function handleNextQuestion(){
        setTurn(prev => {
            let newTurn = prev.turn+1;
            return ({
                ...prev,
                turn:newTurn
            });
        });
    }

    const ctxValue = {
        turn : turnState.turn,
        state:turnState.state,
        incrementTurn:handleNextQuestion
    }

    console.log('new T' + turnState.turn);
    return (
        <TurnContext.Provider value={ctxValue}>
            {children}
        </TurnContext.Provider>
    );
}