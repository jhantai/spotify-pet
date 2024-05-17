import React from 'react';
import './HeaderPage.css'

const HeaderPage = () => {
    return (
        <div>
            <div className="sider-black-panel">
                <div className="side-panel">

                    <div className="sections-panels"></div>
                    <div className="playlist"></div>
                </div>
            </div>
            <div className="background-container">
            <div className="container">
                <div className="good-afternoon-text">
                    <h2 className='h1-good-afternoon'>Good afternoon</h2>
                </div>
                <div className="cards-song">
                    <div className="card1 card"></div>
                    <div className="card2 card"></div>
                    <div className="card3 card"></div>
                    <div className="card4 card"></div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default HeaderPage;