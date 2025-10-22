import React, { Suspense } from 'react';
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
            <Suspense>
                <AllApp data={data} ></AllApp>
            </Suspense>
        </div>
    );
};

export default Home;