import React from 'react';
import { useLoaderData } from 'react-router';
import TotalApps from './TotalApps';
import { CiSearch } from "react-icons/ci";


const Apps = () => {
    const data = useLoaderData()
    // console.log(data)
    return (

        <div className='bg-[#f3f3f3] px-[40px]' >

            <div>
                <p className=' font-bold text-[45px] text-center pt-[60px] ' >Our All Applications</p>
                <p className=' text-center text-gray-500 pt-[17px] ' >Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between pt-[30px] pb-[20px] '>
                <div className=' text-2xl font-semibold' >({data.length}) Apps Found </div>
                <div> <form action=""><input className=' rounded-[5px] border border-gray-400 p-[5px] text-gray-500 ' type="text" placeholder='  Search Apps' /></form> </div>
            </div>

            <div className=' grid grid-cols-4 gap-0  ' >
                {
                    data.map((app) => <TotalApps key={app.id} app={app} ></TotalApps>)
                }
            </div>
        </div>
    );
};

export default Apps;