import axios from "axios";
import {useEffect, useRef, useState} from "react";

const UserCard = ({person, postition}) => {
    return (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
                <div className={"text-3xl font-medium flex items-center"}>{postition}</div>
                <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={person.profilePicture} alt=""/>
                <div className="min-w-0 h-full my-auto">
                    <p className="text-3xl font-semibold leading-6 text-gray-900">{person.name}</p>
                    <p className="mt-3 truncate text-2xl font-bold leading-5 text-gray-500">{person.points}</p>
                </div>
            </div>
        </li>
    )
}

const Scoreboard = ({people}) => {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {people.map((person, index) => <UserCard person={person} postition={index + 4}/>)}
        </ul>
    )
}

const TopPlayerCard = ({person, position}) => {
    return (
        <div className={"border-2 border-black w-fit rounded-2xl p-5"}>
            <div className={"text-3xl font-bold text-gray-600"}>{position}.</div>
            <img src={person.profilePicture} alt={"logo"}
                 className={"w-44 h-44 rounded-full object-cover mx-auto"}/>
            <div className={"text-3xl font-bold mt-3"}>{person.name}</div>
            <div className={"text-2xl font-medium"}>{person.points}</div>
        </div>
    )
}

export default function ScoreboardView({ip}) {
    const [gameStarted, setGameStarted] = useState(false);
    const [progress, setProgress] = useState(8);
    const progressRef = useRef(progress);

    axios.get(ip + "/hasstarted").then((response) => {
        setGameStarted(response.data);
    })

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
        console.log(progressRef.current + " " + localStorage.getItem("currentQuestion"));
        if (progressRef.current <= 1 && parseInt(localStorage.getItem("currentQuestion")) < 16) {
            window.location.href = "/questionview";
        }
    }, [progressRef.current]);

    const [people, setPeople] = useState({students: []}); // Initialize people as an object with students as an empty array

    useEffect(() => {
        fetch(ip + "/game/info?gameId=" + localStorage.getItem("gameId"))
            .then(res => res.json())
            .then(data => {
                setPeople(data); // Set the people state as the fetched data
            })
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(ip + "/hasstarted").then((response) => {
                if (response.data === "true") {
                    window.location.href = "/questionview";
                }
            });
        }, 1000);  // Polling every 1 second

        return () => clearInterval(interval); // Clearing interval when component unmounts
    }, []);


    // Check if people.students is not undefined before slicing
    const topPlayers = people.students ? people.students.slice(0, 3) : [];
    const restOfPlayers = people.students ? people.students.slice(3) : [];

    return (
        <div className={"bg-white p-10"}>
            <div className={"flex"}>
                <div className={"flex flex-col w-1/2"}>
                    <div className={"flex justify-between"}>
                        <div className={"flex flex-col"}>
                            <div className={"text-5xl font-bold"}>Scoreboard</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex w-full justify-center space-x-5 my-10"}>
                {topPlayers.map((person, index) => (
                    <TopPlayerCard person={person} position={index + 1}/>
                ))}
            </div>
            <Scoreboard people={restOfPlayers}/>
        </div>
    )
}
