import {useEffect, useState} from "react";
import axios from "axios";

export default function Clientuserlist({ip}) {
    //get the list of users from the server
    const [gameStarted, setGameStarted] = useState(false);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // Function to fetch game info
        const fetchGameInfo = async () => {
            const res = await fetch(ip + "/game/info?gameId=" + localStorage.getItem("gameId"));
            const data = await res.json();
            console.log(data);
            console.log(data.students[0].profilePicture)
            setPeople(data.students || []);
        };

        // Function to check if game has started
        const checkGameStarted = async () => {
            const response = await axios.get(ip + "/hasstarted");
            console.log("hasstarted");
            console.log(response.data);
            setGameStarted(response.data);
        };

        // Fetch game info and check game status initially
        fetchGameInfo();
        checkGameStarted();

        // Refresh game info and game status every 5 seconds
        const intervalId = setInterval(() => {
            fetchGameInfo();
            checkGameStarted();
        }, 5000);  // 5000 ms = 5 seconds

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [ip]);  // Add ip to the dependency array to rerun the effect if ip changes

    if (gameStarted && localStorage.getItem("currentQuestion") === "0") {
        window.location.href = "/questionview";
    }

    return (
        <div className={"bg-white p-10"}>
            <div className={"flex flex-col"}>
                <div className={"flex justify-between"}>
                    <div className={"flex justify-between w-full"}>
                        <div className={"text-5xl font-bold"}>Userlist</div>
                    </div>
                </div>
            </div>
            <ul role="list" className="divide-y divide-gray-100 mt-5">
                {people.map((person) => (
                    <li key={person.name} className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            <img className="h-12 w-12 object-cover flex-none rounded-full bg-gray-50"
                                 src={person.profilePicture} alt=""/>
                            <div className="min-w-0 flex-auto h-full flex items-center">
                                <p className="text-2xl font-bold leading-6 text-gray-900">{person.name}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
