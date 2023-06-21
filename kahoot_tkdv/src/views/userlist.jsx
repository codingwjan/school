import {useEffect, useState} from "react";

export default function Userlist({ip}) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(ip+"/game/info?gameId="+localStorage.getItem("gameId"))
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data.students)) {
                        setPeople(data.students); // only take the students array from the data
                    } else {
                        // handle the case where data.students is not an array
                        setPeople([]); // set to an empty array, or handle this situation as you see fit
                    }

                    // Assuming game status is present in data
                    // Replace "gameStatus" with the appropriate field in your response
                    if (data.gameStatus === "started") {
                        window.location.href = "/questionview";
                    }
                })
        }, 500);  // Polling every 5 seconds

        return () => clearInterval(interval); // Clearing interval when component unmounts
    }, []);

    const startgame = () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch(ip+"/startnow?gameId=1&teacherId=1", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        //if that works, then redirect to the questionview
        window.location.href = "/questionview";
    }
    return (
        <div className={"bg-white p-10"}>
            <div className={"flex flex-col"}>
                <div className={"flex justify-between"}>
                    <div className={"flex justify-between w-full"}>
                        <div className={"text-5xl font-bold"}>Userlist</div>
                        <button className={"bg-indigo-500 text-2xl font-bold p-2 text-white rounded-xl"} onClick={startgame}>Start Game
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
                <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={person.profilePicture} alt=""/>
                <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto h-full flex items-center">
                        <p className="text-4xl font-bold leading-6 text-gray-900">{person.name}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}
