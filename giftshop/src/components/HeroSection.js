import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted/>
        <h1>Bienvenido a Giftshop</h1>      
        <p>Tienda en Linea de Regalos en Mexico</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>INICIAR</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>VER VIDEO<i className='far fa-play-circle' /></Button>
        </div>
    </div>
  )
}

export default HeroSection
