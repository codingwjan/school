import {useEffect, useState} from "react";

export default function Teacherquestionview({ip}) {
    const [progress, setProgress] = useState(15);
    const total = 15;
    const [userchoose, setUserchoose] = useState();
    const [fetching, setFetching] = useState(false);
    const [questionData, setQuestionData] = useState({question: '', answers: []});

    //make the number larger every second
    async function startTimer() {
        while (progress > 0) {
            await new Promise(r => setTimeout(r, 1000));
            setProgress(progress - 1)
        }
        window.location.href = "/answerpage"
    }

    useEffect(() => {
        if (!fetching) {
            setFetching(true);
            fetch(ip + "/questions/" + localStorage.getItem("currentQuestion"))
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setQuestionData(data);
                })
                .finally(() => {
                    setFetching(false);
                });
        }
    }, []);

    startTimer();
    return (
        <div className={"bg-white"}>
            <div className={"mt-14 w-screen justify-center mx-auto px-10 flex flex-col"}>
                <div className={"flex w-full justify-center text-center items-center"}>
                    <div className={"font-bold text-3xl text-black text-center"}>{progress} seconds</div>
                </div>
                <div className={"h-3 w-1/2 bg-gray-400 rounded-full mx-auto mt-5"}>
                    <div className={"h-3 bg-black rounded-full transition-all duration-700"} style={
                        {
                            width: progress / total * 100 + "%",
                            backgroundColor: "rgb(" + (255 - progress / total * 255) + ", 0, 0)"
                        }
                    }></div>
                </div>
                <div className={"text-7xl font-bold text-black text-center px-10 mt-20"}>
                    {questionData.question}
                </div>
            </div>
        </div>
    )
}
