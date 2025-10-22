import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

// import demoImg from '../assets/demoapp.webp'

const SingApp = (app) => {
    
    return (
        <div>
            <div className=' w-[345px] p-5 bg-white m-2.5 rounded-sm shadow-sm ' >
                <div className='flex justify-center items-center ' >
                    <img className='rounded-[12px]' src={app.app.image} alt="" />
                </div>
                <p className=' font-bold text-[#001931] py-[5px] ' >Apps: {app.app.title} </p>
                <div className=' flex  justify-between py-[5px] ' >
                <button className=' btn text-[#00D390] bg-[#F1F5E8] ' > <MdOutlineFileDownload /> {app.app.downloads} M </button>
                    <button className=' btn text-[#FF8811] bg-[#FFF0E1] ' > <FaStar />
 {app.app.ratingAvg} </button>
                </div>
            </div>
            
        </div>
    );
};

export default SingApp;