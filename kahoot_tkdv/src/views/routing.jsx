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
    let ip = "http://127.0.0.1:8420"
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing ip={ip}/>}/>
                <Route path="/buttonview" element={<ButtonView ip={ip}/>}/>
                <Route path="/questionview" element={<QuestionView ip={ip}/>}/>
                <Route path="/scoreboard" element={<ScoreboardView ip={ip}/>}/>
                <Route path="/teacheruserlist" element={<Userlist ip={ip}/>}/>
                <Route path="/loginclient" element={<Loginclient ip={ip}/>}/>
                <Route path="/loginteacher" element={<Loginteacher ip={ip}/>}/>
                <Route path="/teacherquestionview" element={<Teacherquestionview ip={ip}/>}/>
                <Route path="/answerpage" element={<Answerpage ip={ip}/>}/>
                <Route path={"/clientuserlist"} element={<Clientuserlist ip={ip}/>}/>
                <Route path={"/answerclient"} element={<Answerclient ip={ip}/>}/>
            </Routes>
        </Router>
    );
}
