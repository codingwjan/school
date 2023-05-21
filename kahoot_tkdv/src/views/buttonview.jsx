import axios from "axios";
export default function ButtonView() {
    let time = 20;
    axios.get('http:ip/nextquestiontime').then(r => {
        time = r.data;
    });


    return (
        <div className={"bg-white"}>
            <div className={"justify-center min-h-screen mx-auto px-10 flex flex-col items-center max-w-7xl"}>
                <div className={"flex w-full justify-center text-center items-center"}>
                    <div className={"font-bold text-3xl text-black text-center"}>3/15</div>
                    <div className={"w-2 h-2 rounded-full bg-black mx-2"}></div>
                    <div className={"font-bold text-3xl text-black text-center"}>{time} seconds</div>
                </div>
                <div className={"h-3 w-1/2 bg-gray-400 rounded-full mx-auto mt-5"}>
                    <div className={"h-3 w-1/3 bg-black rounded-full transition-all duration-700"}></div>
                </div>
                <div className={"grid grid-cols-2 gap-4 mt-36 w-full"}>
                    <div
                        className={"bg-red-500 h-60 w-full rounded-lg text-white font-black text-9xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200"}>1
                    </div>
                    <div
                        className={"bg-indigo-500 h-60 w-full rounded-lg text-white font-black text-9xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200"}>2
                    </div>
                    <div
                        className={"bg-yellow-300 h-60 w-full rounded-lg text-white font-black text-9xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200"}>3
                    </div>
                    <div
                        className={"bg-green-500 h-60 w-full rounded-lg text-white font-black text-9xl flex justify-center text-center items-center cursor-pointer hover:brightness-75 transition-all duration-200"}>4
                    </div>
                </div>
            </div>
        </div>
    )
}
