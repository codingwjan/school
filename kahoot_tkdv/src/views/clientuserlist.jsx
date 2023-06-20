import {useEffect, useState} from "react";

export default function Clientuserlist() {
    //get the list of users from the server
    const [people, setPeople] = useState([]);
    useEffect(() => {
            fetch("http://0.0.0.0:8420/game/info?gameId="+localStorage.getItem("gameId"))
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(data.students[0].profilePicture)
                    setPeople(data.students || []);
                })
        }
        , [])
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
                            <img className="h-12 w-12 object-cover flex-none rounded-full bg-gray-50" src={person.profilePicture} alt=""/>
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
