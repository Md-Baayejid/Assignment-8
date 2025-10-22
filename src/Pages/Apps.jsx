import React from 'react';
import { useLoaderData } from 'react-router';
import TotalApps from './TotalApps';

const Apps = () => {
    const data = useLoaderData()
    // console.log(data)
    return (

        <div>
            <div className=' grid grid-cols-4 gap-0 bg-[#f3f3f3] ' >
                {
                    data.map((app) => <TotalApps key={app.id} app={app} ></TotalApps>)
                }
            </div>
        </div>
    );
};

export default Apps;