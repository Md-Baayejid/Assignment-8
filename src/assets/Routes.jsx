import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Apps from "../Pages/Apps";
import AppDetailes from "../Pages/AppDetailes";
import InstallApp from "../Pages/InstallApp";
import AppDetailes1 from "../Pages/AppDetailes1";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index:true,
            loader: ()=> fetch('/appData1.json').then(res => res.json()),
            path: "/",
            Component: Home,
        },
        {
            path:"app",
            loader: ()=> fetch('/appData2.json'),
            Component: Apps,
        },
        {
            path:"appDetails/:id",
            loader: ()=> fetch('/appData2.json'),
            Component: AppDetailes,
        },
        {
            path:"appDetails/:id",
            loader: ()=> fetch('/appData.json'),
            Component: AppDetailes1,
        },
        {
            path:"installApp",
            loader: ()=> fetch('/appData2.json'),
            Component: InstallApp,
        }
    ]

  },
]);