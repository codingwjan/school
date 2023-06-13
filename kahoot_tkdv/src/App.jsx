import './App.css'
import Routing from "./views/routing.jsx";
import {useState} from "react";
import Teacherquestionview from "./views/teacherquestionview.jsx";
import ScoreboardView from "./views/scoreboard.jsx";

function App() {

    return (
        <div className="App">
            <div className={"min-h-screen overflow-hidden"}>
                <Routing/>
            </div>
        </div>
    )
}

function temp() {
    const [questionanswer, setUsername] = useState(true);

    return (
        <div className="App">
            <div className={"min-h-screen overflow-hidden"}>
                <button onClick={() => setUsername(!questionanswer)}>Toggle</button>
                {
                    questionanswer ? <Teacherquestionview/> : <ScoreboardView/>
                }
                <Routing/>
            </div>
        </div>
    )
}

export default App
