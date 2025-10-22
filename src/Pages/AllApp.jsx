import React, { Suspense } from 'react';
import SingApp from './SingApp';
import { Link } from 'react-router';

const AllApp = ({ data }) => {
    // console.log(data)
    return (
        <div>
            <Suspense>
                <div className='bg-[#f3f3f3]'>
                    <div>
                        <p className=' text-center text-5xl font-semibold pt-[80px] ' >Trending App</p>
                        <p className=' text-gray-500 text-center p-[20px] ' >Explore All Trending Apps on the Market developed by us</p>
                    </div>
                    <div className=' grid grid-cols-4 gap-0 ' >
                        {
                            data.map((app) => <SingApp key={app.id} app={app} ></SingApp>)
                        }
                    </div>

                    <div className=' flex justify-center items-center  p-[40px] ' >
                        <Link to="app"  >
                        <button className=" btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-semibold px-6 py-2 rounded-[5px]" >Show All</button>
                        </Link>
                    </div>

                </div>
            </Suspense>
        </div>
    );
};

export default AllApp;