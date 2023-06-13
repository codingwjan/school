import {useState} from "react";

export default function Teacherquestionview() {
    const [progress, setProgress] = useState(15);
    const total = 15;
    const [userchoose, setUserchoose] = useState();
    //make the number larger every second
    async function startTimer() {
        while (progress > 0) {
            await new Promise(r => setTimeout(r, 1000));
            setProgress(progress - 1)
        }
        window.location.href = "/scoreboard"
    }

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
                            width: progress/total * 100 + "%",
                            backgroundColor: "rgb(" + (255 - progress/total * 255) + ", 0, 0)"
                        }
                    }></div>
                </div>
                <div className={"text-5xl font-bold text-black text-center px-10 mt-14"}>cupidatat mollit id commodo
                    duis nulla dolore consectetur aute deserunt quis ut sunt dolor laboris amet ullamco occaecat in
                    dolor
                </div>
                <div className={"grid grid-cols-2 gap-4 mt-14 w-full"}>
                    <div
                        className={"bg-red-500 h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer transition-all duration-200"}>Mr
                        Big
                    </div>
                    <div
                        className={"bg-indigo-500 h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer transition-all duration-200"}>Mr
                        Nice
                    </div>
                    <div
                        className={"bg-yellow-300 h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer transition-all duration-200"}>Rucu
                        rucu
                    </div>
                    <div
                        className={"bg-green-500 h-60 w-full rounded-lg text-white font-black text-5xl flex justify-center text-center items-center cursor-pointer transition-all duration-200"}>Nichts
                    </div>
                </div>
            </div>
        </div>
    )
}
