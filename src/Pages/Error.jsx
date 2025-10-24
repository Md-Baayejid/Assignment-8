import React from 'react';
import errorImg from '../assets/error.png'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#f3f3f3]' >

                <div className='flex justify-center items-center' >
                    <img  src={errorImg} alt="" />
                </div>
            
            <div>
                <p className=' text-5xl p-5 pb-[60px] font-bold text-center ' >Oops, page not found!</p>
            </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;