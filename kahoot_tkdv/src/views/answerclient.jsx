export default function Answerclient() {
    return (
        <div className={"bg-white"}>
            <div className={"mt-14 w-screen justify-center mx-auto px-10 flex flex-col"}>
                <div className={"flex w-full justify-center text-center items-center"}>
                    <div className={"font-bold text-3xl text-black text-center"}>3/15</div>
                    <div className={"w-2 h-2 rounded-full bg-black mx-5"}></div>
                    <div className={"font-bold text-3xl text-black text-center"}>27 seconds</div>
                </div>
                <div className={"h-3 w-1/2 bg-gray-400 rounded-full mx-auto mt-5"}>
                    <div className={"h-3 w-1/3 bg-black rounded-full transition-all duration-700"}></div>
                </div>
                <div className={"text-5xl font-bold text-center pt-10 mt-64 text-black"}>Sucessfully submited answer</div>
            </div>
        </div>
    )
}
