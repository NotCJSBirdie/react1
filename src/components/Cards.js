import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
        <h1> Check out these EPIC Destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="/images/image4.jpg"
                        text="Explore the hidden parts of the environment that you haven't seen before"
                        label="ADVENTURE"
                        path='/services'
                    />
                    <CardItem 
                        src="/images/image6.jpg"
                        text="Learn about the history of humankind"
                        label="HISTORY"
                        path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="/images/image4.jpg"
                        text="Explore the hidden parts of the environment that you haven't seen before"
                        label="ADVENTURE"
                        path='/services'
                    />
                    <CardItem 
                        src="/images/image6.jpg"
                        text="Learn about the history of humankind"
                        label="HISTORY"
                        path='/services'
                    />
                    <CardItem 
                        src="/images/image6.jpg"
                        text="Learn about the history of humankind"
                        label="HISTORY"
                        path='/services'
                    />
                </ul>
                
            </div>
        </div>
            
        </div>
    )
}

export default Cards
