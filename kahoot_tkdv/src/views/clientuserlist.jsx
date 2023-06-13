export default function Clientuserlist() {
    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Student',
            imageUrl: 'data:image/jpeg;base64,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',
            score: 4243
        },
        {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            score: 3995
        },
        {
            name: 'Dries Vincent',
            role: 'Business Relations',
            imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            score: 3703
        },
        {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            score: 3700
        },
        {
            name: 'Courtney Henry',
            role: 'Designer',
            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            score: 2690
        },
        {
            name: 'Tom Cook',
            role: 'Director of Product',
            imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            score: 2503
        },
    ]
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
                    <li key={person.email} className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt=""/>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
