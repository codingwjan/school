import {useEffect, useRef, useState} from "react";

export default function Answerpage() {
    const [progress, setProgress] = useState(7);
    const progressRef = useRef(progress);
    let total = 7;
    const [questionData, setQuestionData] = useState({question: '', answers: []}); // initialize answers as empty array
    const [fetching, setFetching] = useState(false);

    // Timer useEffect
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress - 1;
                progressRef.current = newProgress;
                return newProgress;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Redirect useEffect
    useEffect(() => {
        if (progressRef.current <= 0) {
            window.location.href = "/scoreboard";
        }
    }, [progress]);

    useEffect(() => {
        if (!fetching) {
            setFetching(true);
            fetch("http://0.0.0.0:8420/questions/" + localStorage.getItem("currentQuestion"))
                .then((res) => res.json())
                .then((data) => {
                    console.log("data"+data);
                    setQuestionData(data);
                    let currentLocal = parseInt(localStorage.getItem("currentQuestion")) || 0;
                    currentLocal += 1;
                    console.log(currentLocal);
                    localStorage.setItem("currentQuestion", currentLocal.toString());
                })
                .finally(() => {
                    setFetching(false);
                });
        }
    }, []);

    console.log(questionData)

    return (
        <div className={"bg-white"}>
            <div className={"mt-14 w-screen justify-center mx-auto px-10 flex flex-col"}>
                <div className={"flex w-full justify-center text-center items-center"}>
                    <div className={"font-bold text-3xl text-black text-center"}>
                        {progress} seconds
                    </div>
                </div>
                <div className="h-3 w-1/2 bg-gray-400 rounded-full mx-auto mt-5">
                    <div
                        className="h-3 bg-black rounded-full transition-all duration-700"
                        style={{
                            width: (progress / total) * 100 + "%",
                            backgroundColor: "rgb(" + (255 - (progress / total) * 255) + ", 0, 0)",
                        }}
                    ></div>
                </div>
                <div className={"text-5xl font-bold text-black text-center px-10 mt-14"}>{questionData.question}</div>
            </div>
            <div
                className={
                    "grid grid-cols-2 gap-4 mt-14 w-full"
                }
            >
            {questionData.answers.map((answer, index) => (
                <div
                    key={index}

                    className={
                        "h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200" +
                        (index === 0 ? " bg-red-500" : "") +
                        (index === 1 ? " bg-indigo-500" : "") +
                        (index === 2 ? " bg-yellow-300" : "") +
                        (index === 3 ? " bg-green-500" : "")
                    }
                >
                    {answer}
                </div>
            ))}
            </div>
        </div>
    )
}
