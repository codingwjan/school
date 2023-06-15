import {useEffect, useState} from "react";

export default function Userlist() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch("http://0.0.0.0:8420/game/info?gameId="+localStorage.getItem("gameId"))
            .then(res => res.json())
            .then(data => {
                setPeople(data);
            })
    }, [])
    return (
        <div className={"bg-white p-10"}>
            <div className={"flex flex-col"}>
                <div className={"flex justify-between"}>
                    <div className={"flex justify-between w-full"}>
                        <div className={"text-5xl font-bold"}>Userlist</div>
                        <button className={"bg-indigo-500 text-2xl font-bold p-2 text-white rounded-xl"}>Start Game
                        </button>
                    </div>
                </div>
            </div>
            <ul role="list" className="divide-y divide-gray-100 mt-5">
                <ul role="list" className="divide-y divide-gray-100">
                    {people.map((person, index) => <UserCard person={person} postition={index +1} />)}
                </ul>
            </ul>
        </div>
    )
}
// UserCard Component
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
