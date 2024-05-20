import React from 'react';
import './HeaderPage.css'
import CardsHomePage from '../../modules/cards/cardsHomePage';
import ResponsiveDrawer from '../sideBar/sideBar';
import { MusicCards } from '../../consants/music';

const HeaderPage = () => {
    return (
        <div>
            <div className="background-container">
            <div className="container">
                <div className="text-and-cards-block">
                <div className="good-afternoon-text">
                    <h2 className='h1-good-afternoon'>Good afternoon</h2>
                </div>
                <div className="cards-song">
                    {MusicCards.map((item , idx) => {
                        return(
                        <div className="photo-cards" key={idx}>
                            
                        <div className="cards ">
                        <img className='card-img' src={item.src} alt="" />
                             <p className='card-text'>{item.text}</p>
                        </div>
                </div>
                        
                        )
                    })}
                    </div>
                   </div>

            </div>
            <CardsHomePage/>
            </div>
        </div>
    );
};

export default HeaderPage;