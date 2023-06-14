import {useState} from 'react';

export default function Loginclient({ip}) {
    const [username, setUsername] = useState('');
    const [gameId, setGameId] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleSubmit = async (event) => {
        console.log(ip+`/student?name=${username}&gameId=${gameId}&profilePicture=${profilePicture}`)
        event.preventDefault();
        try {
            const response = await fetch(ip+`/student?name=${username}&gameId=${gameId}&profilePicture=${profilePicture}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Handle the response from the server
            window.location.href = '/scoreboard';
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://pro-webdev.de/assets/stackLogo-a49a3d55.webp"
                    alt="Pro Web-Development"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Join the Students-Team
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
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
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Game Code
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="number"
                                autoComplete="username"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={gameId}
                                onChange={(event) => setGameId(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="profilepicture" className="block text-sm font-medium leading-6 text-gray-900">
                            Profile Picture (Picture URL)
                        </label>
                        <div className="mt-2">
                            <input
                                id="profilepicture"
                                name="profilepicture"
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={profilePicture}
                                onChange={(event) => setProfilePicture(event.target.value)}
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
