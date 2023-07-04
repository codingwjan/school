import {useEffect, useRef, useState} from "react";

export default function ButtonView({ip}) {
    const [userchoose, setUserchoose] = useState(null);
    const [progress, setProgress] = useState(15);
    const [questionData, setQuestionData] = useState({question: '', answers: []});
    const [fetching, setFetching] = useState(false);
    const progressRef = useRef(progress);
    const total = 15;


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

    useEffect(() => {
        if (progressRef.current <= 0) {
            window.location.href = "/answerpage";
        }
    }, [progressRef.current]);

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

    return (
        <div className="bg-white">
            <div className="mt-14 w-screen justify-center mx-auto px-10 flex flex-col">
                <div className="flex w-full justify-center text-center items-center">
                    <div className="font-bold text-3xl text-black text-center">{progress} seconds</div>
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
                <div
                    className={
                        "grid grid-cols-2 gap-4 mt-14 w-full" +
                        (userchoose !== null ? " pointer-events-none cursor-not-allowed" : "")
                    }
                >
                    {questionData.answers.map((answer, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setUserchoose(index);
                                if (index === questionData.correctAnswer) {
                                    let currentscore = parseInt(localStorage.getItem("userScore"))
                                    currentscore += (progressRef.current * 100);
                                    localStorage.setItem("userScore", currentscore.toString());
                                    console.log(currentscore);
                                }
                                let currentscore = localStorage.getItem("userScore")
                                currentscore += index;

                                console.log(ip + "/update?gameId=" + localStorage.getItem("gameId") + "&username=" + localStorage.getItem("username") + "&points=" + currentscore)

                                var requestOptions = {
                                    method: 'POST',
                                    redirect: 'follow'
                                };

                                fetch(ip+"/update?gameId="+localStorage.getItem("gameId")+"&username="+localStorage.getItem("username")+"&points="+localStorage.getItem("userScore"), requestOptions)
                                    .then(response => response.text())
                                    .then(result => console.log(result))
                                    .catch(error => console.log('error', error));

                            }
                            }
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
        </div>
    );
}
