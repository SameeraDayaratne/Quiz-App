import Header from "./components/Header";
import QuestionsCard from "./components/QuestionsCard";
import Questions from "./Questions.js"
import { useState } from "react";
import { TurnContext } from "./Store/Turn-Context";

function App() {

    const [turnState, setTurn] = useState({
        turn:1
    });

    function handleNextQuestion(){
        setTurn(prev => prev+1);
    }

    const ctxValue = {
        turn : turnState.turn,

    }
    
    return(
        <TurnContext.Provider value={ctxValue}>
            <Header></Header>
            <QuestionsCard></QuestionsCard>

        </TurnContext.Provider>
    );
}

export default App;
