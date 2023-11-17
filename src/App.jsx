import Header from "./components/Header";
import QuestionsCard from "./components/QuestionsCard";
import TurnContextProvider from "./Store/Turn-Context";

function App() {
   
    return(
        <TurnContextProvider>
            <Header></Header>
            <QuestionsCard></QuestionsCard>
        </TurnContextProvider>
    );
}

export default App;
