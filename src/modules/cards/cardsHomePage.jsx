import React from 'react'
import { cards } from '../../consants/cards'

const CardsHomePage = () => {
  return (
    <div>
        {cards.map((item,idx)=>{
            return(
                <div key={idx}>
                    <h1>{item.sectionTitle}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default CardsHomePage