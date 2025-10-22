import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Banner from '../Component/Banner';
import { useLoaderData } from 'react-router';
import AllApp from './AllApp';

const Home = () => {
    const data = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <AllApp data={data} ></AllApp>
        </div>
    );
};

export default Home;