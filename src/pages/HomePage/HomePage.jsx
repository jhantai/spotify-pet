import React from 'react';
import HeaderPage from "../../modules/HeaderPage/HeaderPage";
import sideBar from "../../modules/sideBar/sideBar"
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='components'>
            <sideBar>
            <HeaderPage />
            </sideBar>
        </div>
    );
};

export default HomePage;