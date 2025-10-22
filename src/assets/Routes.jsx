import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Apps from "../Pages/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index:true,
            loader: ()=> fetch('./appData1.json'),
            path: "/",
            Component: Home,
        },
        {
            path:"app",
            loader: ()=> fetch('./appData2.json'),
            Component: Apps,
        }
    ]

  },
]);