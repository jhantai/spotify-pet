import React from 'react';
import HeaderPage from "../../modules/HeaderPage/HeaderPage";
import './HomePage.css'
import PlayerFinal from '../../modules/musicPLayer/output';

const HomePage = () => {
 
    return (
        <div className='components'>
            <HeaderPage />
            <PlayerFinal/>
        </div>
    );
};

export default HomePage;