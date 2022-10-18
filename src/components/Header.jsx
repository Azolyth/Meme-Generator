import React from 'react';

// Images
import trollFace from '../images/trollface.png';

const Header = () => {
  return (
    <header className='header gradient'>
      <img className='header-img' src={trollFace} alt='Troll Face' />
      <h2 className='header-title'>Meme Generator</h2>
      <h4 className='header-subtitle'>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
