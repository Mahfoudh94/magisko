import { useState } from 'react';

export default function IconInput({ name, icon, placeholder, type = "text", onChange, value= "" }) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (typeof onChange === 'function') {
        onChange(event.target.value);
      }
  };

  return (
    <div className="relative my-3">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none
       text-gray-100/70 text-xl ">
        <i className={icon}/>
      </div>
      <input
        className={`bg-transparent ${
            inputValue ? 'pt-6' : 'pt-3'
          } pl-10 pr-3 py-4 text-gray-100/70 focus:bg-gray-100/30 focus:text-gray-100 transition
           duration-100 rounded-[1rem] w-full focus:outline-none `}
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        name={name}
      />
      <label
        className={`${
            inputValue ? 'text-xs' : 'text-base'
          } absolute left-11 top-${
            inputValue ? '2' : '1/2'
          } transform transition-all duration-200 ease-in-out translate-y-2 text-gray-100/50`}
      >
        {placeholder}
      </label>
    </div>
  );
}

        // <div className="h-screen w-screen bg-[#201a30] flex items-center justify-center flex-col">
            
        //     <h2 className="text-white font-medium text-[3rem]">Login</h2>
        //     <div className="h-2"/>
        //     <IconInput icon="fa-thin fa-user" placeholder="Username"
        //      value={username} onChange={setUsername}/>
        //      <IconInput icon="fa-thin fa-lock" placeholder="Password" type="password"
        //      value={password} onChange={setPassword}/>

        //      <button className="bg-red-600 font-bold rounded-[4rem] px-20 py-4 mt-20"
        //      onClick={e => {console.log(username, password)}}>Check</button>

        //      <p className=""></p>
        // </div>