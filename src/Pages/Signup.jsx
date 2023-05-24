import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios";
import { useMainContext } from "../MainContext";

export default function Signup() {
  const {UserToken, setUserToken} = useMainContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  if (UserToken) return (<Navigate to="/" />)
  
  function handleSubmit() {

    function handleSubmit(ev) {
      ev.preventDefault();
        axiosClient.post('/signup', {
            username: username,
            password: password
        }).then(({data}) => {
            setUserToken(data.Token)
        }).catch(({response}) => console.log(response))
    }
  }

  return (
    <div className="h-screen w-screen bg-slate-50 flex items-center justify-center">
      <div className="bg-white shadow-md shadow-gray-800/10 grid grid-cols-2 rounded-sm">
        <form className="flex flex-col flex-1 align-middle p-8">
          <h2 className="text-black font-light text-[2rem]">Sign up</h2>

          <div className="h-4" />

          <h4 className="text-black font-medium text-sm my-4">Username</h4>
          <input
            type="text"
            className="round-lg bg-zinc-100 text-gray-800 rounded-[1.5em]
                    outline-none px-8 py-3 w-full"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h4 className="text-black font-medium text-sm my-4">Email</h4>
          <input
            type="text"
            className="round-lg bg-zinc-100 text-gray-800 rounded-[1.5em]
                    outline-none px-8 py-3 w-full"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h4 className="text-black font-medium text-sm my-4">Password</h4>
          <input
            type="password"
            className="round-lg bg-zinc-100 text-gray-800 rounded-[1.5em]
                    outline-none px-8 py-3 w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full py-3 bg-gradient-to-br from-[#f75959] to-[#f35587]
                        rounded-[1.5em] text-white mt-6 mb-3 hover:opacity-90 duration-200"
            type="submit"
          >
            Sign up
          </button>
          <div className="mb-10" />
        </form>
        <div
          className="flex h-full w-full justify-center items-center flex-col gap-3
                bg-gradient-to-br from-[#f75959] to-[#f35587] aspect-square"
        >
          <h1 className="text-white text-[2rem] font-bold mx-28">
            Welcome to Signup
          </h1>
          <h2 className="text-white text-xl ">Already have an account?</h2>
          <Link
            to="/login"
            className="py-3 px-6 border-white text-white 
                    border-[1px] rounded-[1.5em]"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
