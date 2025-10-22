import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetailes = () => {
    const { id } = useParams()
    const appId = parseInt(id)
    const data = useLoaderData()
    const singleApp = data.find(app=>app.id === appId)
    console.log(singleApp)

    return (
        <div>
            <p>name{singleApp.title}</p>
        </div>
    );
};

export default AppDetailes;