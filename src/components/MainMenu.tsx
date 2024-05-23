import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import'../App.css';
export default function MainMenu() {
    const { setGameState} = useContext(QuizContext);
    return (
        <div className="Menu">
            <button onClick={() => {setGameState('quiz')}}>Start Quiz</button>
        </div>
    )
}