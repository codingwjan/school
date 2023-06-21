import {useEffect, useState} from 'react';

export default function Loginteacher({ip}) {
    const [username, setUsername] = useState('');
    const [id, setId] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log("fetching");

        fetch(ip+"/teacher?teacherId="+id+"&teacherName="+username, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                console.log(data.status);

                // check if the data has a statusCode property with a value of 200
                if (data.status === 200) {
                    localStorage.setItem("isTeacher", "true");
                    localStorage.setItem("isTeacher", "0");
                    localStorage.setItem("teacherId", id.toString());
                    window.location.href = "/teacheruserlist";
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-48 w-auto invert"
                    src="https://pro-webdev.de/assets/logo-508d7998.png"
                    alt="Pro Web-Development"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Join the Teacher-Team
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="username"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="profilepicture" className="block text-sm font-medium leading-6 text-gray-900">
                            Teacher ID
                        </label>
                        <div className="mt-2">
                            <input
                                id="id"
                                name="number"
                                type="number"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={id}
                                onChange={(event) => setId(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
