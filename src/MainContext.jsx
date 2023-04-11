import { createContext, useContext } from "react";

const MainContext = createContext({
    CurrentUser: {},
    UserToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [CurrentUser, setCurrentUser] = useState({});
    const [UserToken, setUserToken] =
        useState(localStorage.getItem("USER_TOKEN") || '');
    return (
        <MainContext.Provider
         value={{CurrentUser,
            UserToken,
            setCurrentUser,
            setUserToken}}>
            {children}
        </MainContext.Provider>
    )
}

export default useMainContext() = useContext(MainContext);