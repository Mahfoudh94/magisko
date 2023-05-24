import { useState } from "react"
import { Link, Navigate } from "react-router-dom";
import axiosClient from "../axios";
import { useMainContext } from "../MainContext";

export default function Login() {
    const {UserToken, setUserToken, CurrentUser, setCurrentUser} = useMainContext();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (UserToken) return (<Navigate to="/" />)

    function handleSubmit(ev) {
        ev.preventDefault();
        axiosClient.post('/login', {
            username: username,
            password: password
        }).then(({data}) => {
            setUserToken(data.token)
            setCurrentUser(data.user)
        }).catch(({response}) => console.log(response))
    }

    return (
        <div className="h-screen w-screen bg-slate-50 flex items-center justify-center">
            <form className="bg-white shadow-md shadow-gray-800/10 grid grid-cols-2 rounded-sm"
            onSubmit={handleSubmit}>
                <div className="flex flex-col flex-1 align-middle p-8">
                    <h2 className="text-black font-light text-[2rem]">Log in</h2>
                    <div className="h-4" />
                    <h4 className="text-black font-medium text-sm my-4">Username</h4>
                    <input type="text" className="round-lg bg-zinc-100 text-gray-800 rounded-[1.5em]
                    outline-none px-8 py-3 w-full" placeholder="Username"
                     value={username} onChange={e => setUsername(e.target.value)}/>
                    <h4 className="text-black font-medium text-sm my-4">Password</h4>
                    <input type="password" className="round-lg bg-zinc-100 text-gray-800 rounded-[1.5em]
                    outline-none px-8 py-3 w-full" placeholder="Password"
                     value={password} onChange={e => setPassword(e.target.value)}/>

                     <button className="w-full py-3 bg-gradient-to-br from-[#f75959] to-[#f35587]
                        rounded-[1.5em] text-white mt-6 mb-3 hover:opacity-90 duration-200"
                        type="submit">Log in</button>
                    <span><input type="checkbox" name="remember" className="rounded accent-pink-500 inline mb-10"/>
                    <h6 className="text-pink-500 inline mx-2">Remember me</h6></span>
                </div>
                <div className="flex h-full w-full justify-center items-center flex-col gap-3
                bg-gradient-to-br from-[#f75959] to-[#f35587] aspect-square">
                    <h1 className="text-white text-[2rem] font-bold mx-28">Welcome to login</h1>
                    <h2 className="text-white text-xl ">Don't have an account?</h2>
                    <Link to="/signup" className="py-3 px-6 border-white text-white 
                    border-[1px] rounded-[1.5em]">Signup</Link>
                </div>
            </form>
        </div>
    )
}