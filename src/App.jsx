import { useState } from "react";

export default function App(){
  const [clicks, setClicks] = useState(localStorage.getItem('clicks') || 0);

  const _setClicks = () => {
    setClicks(a => a - -1);
    localStorage.setItem('clicks', clicks + 1);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex bg-slate-100 w-56 h-32 text-center items-center justify-center">
        <div>
        <span className="block">
          <h1 className="text-gray-900 inline">You clicked </h1>
          <h1 className="text-cyan-500 inline">{clicks}</h1>
        </span>
        <button className="p-4 text-black border-black rounded-md border-[2px]"
        onClick={_setClicks}>Click me!</button>
        </div>
        <br/>
        {(clicks!== 0 || clicks !== undefined) && <a onClick={()=> setClicks(0)}>reset</a>}
      </div>
    </div>
  )
}
