import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
const InsAppDetailes = ({app}) => {
    return (
        <div  >
            <div className=' bg-white p-2.5 mt-3.5 rounded-sm  ' >
                <div className=' flex  justify-between items-center ' >
                    <div className=' flex items-center gap-2.5 ' >
                        <img className=' h-[70px] rounded-sm ' src={app.image} alt="" />
                        <div>
                            <p className=' font-semibold ' >App: {app.title} </p>
                            <div className=' flex gap-5 ' >
                                <p className='flex items-center font-semibold text-[#00D390] ' > <MdOutlineFileDownload /> {app.downloads}M </p>
                                <p className='flex items-center font-semibold text-[#FF8811] ' > <FaStar /> {app.ratingAvg} </p>
                                <p className=' text-gray-500 ' > {app.size} MB </p>
                            </div>
                        </div>
                    </div>
                    <div> 
                        <button className='btn bg-[#00D390] text-white ' >
                            Uninstall
                        </button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default InsAppDetailes;