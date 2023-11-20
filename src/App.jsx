import Header from "./components/Header";
import QuestionsCard from "./components/QuestionsCard";
import AnswersCard from "./components/AnswersCard";
import { TurnContext } from "./Store/Turn-Context";
import { useContext } from "react";



function App() {

    const {turn} = useContext(TurnContext);
    
   
    return(
        <>
            <Header></Header>            
            {turn < 7 ? <AnswersCard></AnswersCard> : <QuestionsCard></QuestionsCard>}
        </>
    );
}

export default App;
