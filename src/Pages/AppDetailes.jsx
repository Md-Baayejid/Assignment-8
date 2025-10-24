import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { addToStoreDB } from '../Utility/Utility';


const AppDetailes = () => {
    const { id } = useParams()
    const appId = parseInt(id)
    const data = useLoaderData()
    const singleApp = data.find(app => app.id === appId)
    // console.log(singleApp)

    const handleInstall = (id) => {
        addToStoreDB(id)
        console.log('clicked', id)
    }

    return (
        <div className=' p-[60px] bg-[#f3f3f3] '>
            <div className=' flex gap-7 pb-9 border-b border-gray-400 '>
                <div><img className=' w-[350px] ' src={singleApp.image} alt="" /></div>
                <div className=' space-y-5 '>
                    <div>
                        <p className='text-[30px] font-semibold'>Apps : {singleApp.title}</p>
                        <p className='  ' > <span className='  ' >Developed by</span> <span className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent font-bold' >{singleApp.companyName}</span></p>
                    </div>
                    <div className=' flex text-start gap-10 pt-[30px] items-center ' >
                        <div className=' space-y-2 ' >
                            <p className=' text-[40px] text-[#54CF68] ' ><MdOutlineFileDownload />
                            </p>
                            <p className=' text-gray-500 ' >Downloads</p>
                            <p className=' text-[40px] font-bold ' > {singleApp.downloads}M</p>
                        </div>
                        <div className=' space-y-2 ' >
                            <p className=' text-4xl text-[#FF8811] pb-[5px] '><FaStar /></p>
                            <p className=' text-gray-500 ' >Average Ratings</p>
                            <p className=' text-[40px] font-bold ' >{singleApp.ratingAvg}</p>
                        </div>
                        <div className=' space-y-2 ' >
                            <p className=' text-[43px] text-[#632EE3] ' ><MdReviews /></p>
                            <p className=' text-gray-500 ' >Total Reviews</p>
                            <p className=' text-[40px] font-bold ' > {singleApp.reviews}k </p>
                        </div>
                    </div>

                    <button onClick={() => handleInstall(id)} className='btn bg-[#00D390] text-white' >Install Now</button>

                </div>

            </div>

            <div>
                i am here
            </div>

            <div>
                <p className=' pt-[30px] font-bold text-2xl ' >Description:</p>
                <p className=' pt-[20px] text-gray-500 ' >{singleApp.description}</p>

            </div>

        </div>
    );
};

export default AppDetailes;