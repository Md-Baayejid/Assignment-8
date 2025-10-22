import React from 'react';
import appImg from '../assets/AppStore.png'
import playImg from '../assets/PlayStore.png'
import heroImg from '../assets/hero.png'

const Banner = () => {
    return (
        <div className=' bg-[#f3f3f3] ' >
            <div className=' pt-[60px] pb-[30px] ' >
                <p className=' text-center font-bold text-7xl ' >We Build <br /> <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent text-7xl font-bold" >Productive</span> Apps</p>
            </div>

            <div>
                <p className=' text-center px-[260px] text-[20px] text-[#627382] ' >At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className=' flex justify-center gap-5 p-[30px] ' >
                <a href="https://play.google.com/store/games?hl=en"><button className='btn bg-[#f3f3f3] border font-bold border-gray-300' > <img className=' h-[25px] ' src={playImg} alt="" /> Google Play</button></a>
                <a href="https://www.apple.com/app-store/"><button className='btn bg-[#f3f3f3] border font-bold border-gray-300' > <img className=' h-[25px] ' src={appImg} alt="" /> App Store</button></a>
            </div>

            <div className="flex justify-center items-center pt-2.5">
                <img className="text-center" src={heroImg} alt="" />
            </div>

            <div className=' bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] '  >
                <p className=' text-white pt-[70px] text-center text-[45px] font-semibold ' >Trusted by Millions, Built for You</p>
                <div className=' pt-[40px] pb-[70px] flex justify-evenly ' >
                    <div className='text-center space-y-3 text-white '>
                        <p>Total Download</p>
                        <p className=' text-[60px] font-bold ' >29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-center space-y-3 text-white '>
                        <p>Total Reviews</p>
                        <p className=' text-[60px] font-bold ' >906K</p>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-center space-y-3 text-white '>
                        <p>Active Apps</p>
                        <p className=' text-[60px] font-bold ' >132+</p>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;