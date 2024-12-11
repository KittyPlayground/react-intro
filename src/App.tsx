import './App.css'

import {createBrowserRouter} from "react-router";
import {Dashboard} from "./pages/DashBoard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {RouterProvider} from "react-router/dom";
import {RootLayout} from "./component/RootLayout.tsx";


function App() {

    const routes = createBrowserRouter([

        {
            path: "",
            element: <RootLayout/>,
            children: [
                 {path: "", element: <Dashboard/>},
                 {path:'/add',element:<AddCustomer/>},
                 {path:'/update',element:<UpdateCustomer/>},
                 {path:'/delete',element:<DeleteCustomer/>}

            ]
        }

        ]
    )

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    )}


export default App
