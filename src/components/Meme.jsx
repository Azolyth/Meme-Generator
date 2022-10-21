import React, { useState } from 'react';

// Data
import memesData from '../memesData';

const Meme = () => {
  const [memeImage, setMemeImage] = useState('');

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
    <main>
      <div className='meme-form' action='submit'>
        <input className='form-input' type='text' placeholder='Top text' />
        <input className='form-input' type='text' placeholder='Bottom text' />
        <button className='meme-btn gradient' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img className='meme-img' src={memeImage} />
    </main>
  );
};

export default Meme;
