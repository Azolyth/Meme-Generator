import React from 'react';

// Images
import trollFace from '../images/trollface.png';

const Header = () => {
  return (
    <header className='flex'>
      <div className='flex'>
        <img className='header-img' src={trollFace} alt='Troll Face' />
        <h1 className='header-title'>Meme Generator</h1>
      </div>
      <h2 className='header-subtitle'>React Course - Project 3</h2>
    </header>
  );
};

export default Header;
