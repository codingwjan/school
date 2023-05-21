import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ButtonView from "./buttonview.jsx";
import QuestionView from "./questionview.jsx";
import ScoreboardView from "./scoreboard.jsx";
import Landing from "./landing.jsx";
import Userlist from "./userlist.jsx";
import Loginclient from "./loginclient.jsx";
import Loginteacher from "./loginteacher.jsx";
import Teacherquestionview from "./teacherquestionview.jsx";
import Answerpage from "./answerpage.jsx";
import Clientuserlist from "./clientuserlist.jsx";
import Answerclient from "./answerclient.jsx";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/buttonview" element={<ButtonView/>}/>
                <Route path="/questionview" element={<QuestionView/>}/>
                <Route path="/scoreboard" element={<ScoreboardView/>}/>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="/userlist" element={<Userlist/>}/>
                <Route path="/loginclient" element={<Loginclient/>}/>
                <Route path="/loginteacher" element={<Loginteacher/>}/>
                <Route path="/teacherquestionview" element={<Teacherquestionview/>}/>
                <Route path="/answerpage" element={<Answerpage/>}/>
                <Route path="/" element={<Landing/>}/>
                <Route path={"/clientuserlist"} element={<Clientuserlist/>}/>
                <Route path={"/answerclient"} element={<Answerclient/>}/>
            </Routes>
        </Router>
    );
}
