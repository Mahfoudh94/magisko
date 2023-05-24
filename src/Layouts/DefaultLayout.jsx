import { Link, Outlet } from "react-router-dom";
import { useMainContext } from "../MainContext";
import axiosClient from "../axios";
import router from "../router";

export default function DefaultLayout({}){
    const {setCurrentUser, setUserToken, UserToken, CurrentUser} = useMainContext();
    const logout = () => {
        axiosClient.post('/logout')
            .then(() => {
                setCurrentUser({});
                setUserToken(null);
                router.navigate('/');
            })
    }
    return (
        <>
            <div className="bg-slate-950 w-screen h-24 border-b-[.2rem] border-b-red-600 flex
            justify-between align-middle">
                <img src="/logo.png" className="invert p-4 mx-12"/>
                <div className="flex justify-around text-white items-center h-min">
                    {!UserToken && <Link to="/login" className="p-6 hover:bg-white/20 rounded-[.5em]">Log in</Link>}
                    {!UserToken && <Link to="/signup" className="p-6 hover:bg-white/20 rounded-[.5em]">Sign up</Link>}
                    {UserToken && CurrentUser.role == 0 && <Link to="/admin" className="p-6 hover:bg-white/20">Admin panel</Link>}
                    {UserToken && <button onClick={logout} className="p-6 hover:bg-white/20 rounded-[.5em]">Logout</button>}
                </div>
            </div>
            <div className="bg-slate-50 shadow-sm shadow-gray-400 w-screen h-16"/>
            <div className="bg-slate-400/10 w-screen h-20 shadow-sm shadow-gray-300 flex items-center">
                <h3 className="text-black font-bold ml-20 inline-block 
                relative align-baseline">REGULAR PAGE</h3>
            </div>
                <Outlet/>
        </>
    )
}