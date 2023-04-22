import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards(){
    return(
        <div className='cards'>
            <h1>Regalos Destacados</h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                        <CardItem src='images/gifts-1.jfif' text='Personalizadosssssss' label='Peluches' path='/services'/>
                        <CardItem src='images/gift-shop-2.jpg' text='Personalizadosssssss' label='Navidad' path='/services'/>
                        <CardItem src='images/present.jfif' text='Personalizadosssssss' label='Cards' path='/services'/>
                        <CardItem src='images/gifts-3.jfif' text='Personalizadosssssss' label='GiftShop' path='/services'/>
                        <CardItem src='images/peques.jpg' text='Personalizadosssssss' label='Bebes' path='/services'/>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;