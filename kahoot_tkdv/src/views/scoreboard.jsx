// UserCard Component
import axios from "axios";
import {useEffect, useRef, useState} from "react";

const UserCard = ({ person, postition }) => {
    return (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
                <div className={"text-3xl font-medium flex items-center"}>{postition}</div>
                <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt=""/>
                <div className="min-w-0 h-full my-auto">
                    <p className="text-3xl font-semibold leading-6 text-gray-900">{person.name}</p>
                    <p className="mt-3 truncate text-2xl font-bold leading-5 text-gray-500">{person.score}</p>
                </div>
            </div>
        </li>
    )
}

// Scoreboard Component
const Scoreboard = ({ people }) => {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {people.map((person, index) => <UserCard person={person} postition={index + 4} />)}
        </ul>
    )
}

// TopPlayerCard Component
const TopPlayerCard = ({ person, position }) => {
    return (
        <div className={"border-2 border-black w-fit rounded-2xl p-5"}>
            <div className={"text-3xl font-bold text-gray-600"}>{position}.</div>
            <img src={person.imageUrl} alt={"logo"}
                 className={"w-44 h-44 rounded-full object-cover mx-auto"}/>
            <div className={"text-3xl font-bold mt-3"}>{person.name}</div>
            <div className={"text-2xl font-medium"}>{person.score}</div>
        </div>
    )
}

// Your ScoreboardView Component
export default function ScoreboardView() {
    //wait for the serve to send me a signal when the game starts

    //check every second asynchonously if the game has started
    fetch("http://0.0.0.0:8420/hasstarted").then((response) => {
        if (response.data === "true") {
            window.location.href = "/questionview";
        }
    }
    )

    const [gameStarted, setGameStarted] = useState(false);
    const [progress, setProgress] = useState(8);
    const progressRef = useRef(progress);
    axios.get("http://0.0.0.0:8420/game/started").then((response) => {
        setGameStarted(response.data);
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress - 1;
                progressRef.current = newProgress;
                console.log(newProgress);
                return newProgress;
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup the timer on component unmount
    }, []);

    useEffect(() => {
        if (progressRef.current <= 0) {
            window.location.href = "/questionview";
        }
    }, [progressRef.current]);


    //when the game starts, redirect to /questionview
    if (gameStarted) {
        window.location.href = "/questionview";
    }
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch("http://0.0.0.0:8420/game/info?gameId="+localStorage.getItem("gameId"))
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPeople(data);
            })
    }, []);


    const topPlayers = people.slice(0, 3);
    const restOfPlayers = people.slice(3);

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
                    <TopPlayerCard person={person} position={index + 1} />
                ))}
            </div>
            <Scoreboard people={restOfPlayers} />
        </div>
    )
}
