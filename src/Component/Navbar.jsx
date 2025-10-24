import React from 'react';
import logoImg from '../assets/logo.png'
import gitImg from '../assets/git.png'
import { Link } from 'react-router';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a href=""> Item 3</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to="/" >
                         <div className=" ml-8 flex items-center gap-2 font-bold text-xl" >
                            <img className=' h-[50px] ' src={logoImg} alt="" /> <p className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent text-2xl font-bold">
                            HERO.io
                        </p>
                         </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li className=' font-semibold m-1 ' ><button className='btn border-0 bg-white'>Home</button></li></Link>
                        <Link to="app" ><li className=' font-semibold m-1 ' ><button className='btn border-0 bg-white'>Apps</button></li></Link>
                        <Link to="installApp">
                        <li className=' font-semibold m-1 ' ><button className='btn border-0 bg-white'>Installation</button>  </li>
                        </Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-semibold px-6 py-2 rounded-xl" href="https://github.com/Md-Baayejid">
                        <img src={gitImg} alt="" /> Contribute
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;