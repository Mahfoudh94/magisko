import { createContext, useContext, useState } from "react";

const MainContext = createContext({
    CurrentUser: {},
    UserToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [CurrentUser, _setCurrentUser] = useState({});
    const [UserToken, _setUserToken] =
        useState(localStorage.getItem("USER_TOKEN") || '');
        const setUserToken = (val) => {
            _setUserToken(val);
            localStorage.setItem('USER_TOKEN', val)
        }
        const setCurrentUser = () => {}
    return (
        <MainContext.Provider
         value={{CurrentUser,
            UserToken,
            setCurrentUser,
            setUserToken
          }}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);