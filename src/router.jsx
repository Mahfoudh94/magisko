import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Main from "./Pages/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "",
                element: <Main />
            },{
                path: "new",
            },{
                path: "show/:productID",
            },{
                path: "admin",
            }
        ]
    },{
        path: "/login",
        element: <Login/>
    },{
        path: "/signup",
        element: <Signup/>
    },
])
export default router;