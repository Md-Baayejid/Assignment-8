import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApp } from '../Utility/Utility';
import InsAppDetailes from './InsAppDetailes';

const InstallApp = () => {
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
                    <button className='btn'>
                        Hello
                    </button>
                </div>
            </div>
            {
                insApp.map((app)=><InsAppDetailes key={app.id} app={app} ></InsAppDetailes>)
            }
        </div>
    );
};

export default InstallApp;