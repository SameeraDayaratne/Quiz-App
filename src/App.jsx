import Header from "./components/Header";
import QuestionsCard from "./components/QuestionsCard";
import AnswersCard from "./components/AnswersCard";
import { TurnContext } from "./Store/Turn-Context";
import { useContext } from "react";



function App() {

    const {turn,totalScore,noOfSkips} = useContext(TurnContext);

    let skippedPer = 0;
    let answeredPer = 0;
    let wrongPer = 0;

    let perObj;
    
    if(turn > 7)
    {
        skippedPer = Math.ceil((noOfSkips/7)*100);
        answeredPer = Math.ceil(((totalScore)/(7-noOfSkips))*100);
        wrongPer = Math.ceil(100 - (skippedPer + answeredPer));

        perObj = {
            skippedPer,
            answeredPer,
            wrongPer
        }
      
    }
   
    return(
        <>
            <Header></Header>            
            {turn > 7 ? <AnswersCard percentages={perObj}></AnswersCard> : <QuestionsCard></QuestionsCard>}
        </>
    );
}

export default App;
