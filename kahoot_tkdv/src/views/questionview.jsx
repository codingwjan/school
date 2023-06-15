import { useEffect, useRef, useState } from "react";

export default function QuestionView() {
    const [progress, setProgress] = useState(5);
    const progressRef = useRef(progress);
    const total = 5;


    useEffect(() => {
        let isMounted = true; // Initial mounted state is true

        async function startTimer() {
            while (isMounted && progressRef.current > 0) {
                await new Promise((r) => setTimeout(r, 1000));
                setProgress((prevProgress) => {
                    const newProgress = prevProgress - 1;
                    progressRef.current = newProgress;
                    return newProgress;
                });
            }
            if (isMounted) {
                window.location.href = "/buttonview";
            }
        }

        startTimer(); // Start the timer

        return () => {
            isMounted = false; // On unmount, set isMounted to false
        };
    }, []); // Empty dependency array ensures this runs once

    return (
        <div className={"bg-white"}>
            <div className={"mt-14 w-screen justify-center mx-auto px-10 flex flex-col"}>
                <div className={"flex w-full justify-center text-center items-center"}>
                    <div className={"font-bold text-3xl text-black text-center"}>
                        {progress} seconds
                    </div>
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
                <div className={"text-5xl font-bold text-center px-10 mt-64 text-red-500"}>
                    {progress} seconds
                </div>
            </div>
        </div>
    );
}
