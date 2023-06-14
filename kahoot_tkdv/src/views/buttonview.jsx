import { useState, useEffect, useRef } from "react";

export default function ButtonView() {
    const [userchoose, setUserchoose] = useState(0);
    const [progress, setProgress] = useState(15);
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

        return () => clearInterval(timer); // Cleanup the timer on component unmount
    }, []);

    useEffect(() => {
        if (progressRef.current <= 0) {
            window.location.href = "/scoreboard";
        }
    }, [progressRef.current]);

    return (
        <div className={"bg-white"}>
            <div className={"mt-14 w-screen justify-center mx-auto px-10 flex flex-col"}>
                <div className={"flex w-full justify-center text-center items-center"}>
                    <div className={"font-bold text-3xl text-black text-center"}>{progress} seconds</div>
                </div>
                <div className={"h-3 w-1/2 bg-gray-400 rounded-full mx-auto mt-5"}>
                    <div
                        className={"h-3 bg-black rounded-full transition-all duration-700"}
                        style={{
                            width: (progress / total) * 100 + "%",
                            backgroundColor: "rgb(" + (255 - (progress / total) * 255) + ", 0, 0)",
                        }}
                    ></div>
                </div>
                <div className={"grid grid-cols-2 gap-4 mt-14 w-full"
                    //if user has chosen, disable the buttons and cursor not allowed
                    + (userchoose !== 0 ? " pointer-events-none cursor-not-allowed" : "")}>
                    <div
                        onClick={() => {
                            setUserchoose(1);
                        }}
                        className={
                            "bg-red-500 h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200"
                        }
                    >
                        Mr Big
                    </div>
                    <div
                        onClick={() => {
                            setUserchoose(2);
                        }}
                        className={
                            "bg-indigo-500 h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200"
                        }
                    >
                        Mr Nice
                    </div>
                    <div
                        onClick={() => {
                            setUserchoose(3);
                        }}
                        className={
                            "bg-yellow-300 h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200"
                        }
                    >
                        Rucu rucu
                    </div>
                    <div
                        onClick={() => {
                            setUserchoose(4);
                        }}
                        className={
                            "bg-green-500 h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200"
                        }
                    >
                        Nichts
                    </div>
                </div>
            </div>
        </div>
    );
}
