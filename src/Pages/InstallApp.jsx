import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApp } from '../Utility/Utility';
import InsAppDetailes from './InsAppDetailes';

const InstallApp = () => {

     const [sort, setsort] = useState([])
    const handleSort = (type) => {
        setsort(type)
        if (type==="Low-High") {
            const shortByPage = [...insApp].sort((a,b) => a.downloads - b.downloads);
            setInsApp(shortByPage)
        }
        if (type === "High-Low") {
            const shortByRating = [...insApp].sort((a,b) => b.downloads - a.downloads);
            setInsApp(shortByRating)
        }
    }

    const data = useLoaderData();
    const [insApp, setInsApp] = useState([])
    useEffect(() => {
        const storeAppData = getStoreApp()
        const convertAppData = storeAppData.map(app => parseInt(app))

        const appList = data.filter(app => convertAppData.includes(app.id))
        setInsApp(appList)
    }, [])
    return (
        <div className=' bg-[#f3f3f3] px-[40px] pb-[40px] ' >
            <div>
                <p className=' text-[45px] font-bold text-center pt-[60px] ' >Your Installed Apps</p>
                <p className=' text-center text-gray-500 pt-[20px] text-[20px] ' >Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between pt-[40px] pb-[20px] ' >
                <div>
                    <p className=' text-[20px] font-semibold ' > {insApp.length} Apps Found</p>
                </div>
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1"> Sort : {sort?sort:""}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=>handleSort("High-Low")} >High-Low</a></li>
                            <li><a onClick={()=>handleSort("Low-High")} >Low-High</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            {
                insApp.map((app) => <InsAppDetailes key={app.id} app={app} ></InsAppDetailes>)
            }
        </div>
    );
};

export default InstallApp;