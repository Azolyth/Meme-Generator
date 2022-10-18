import React from 'react';

// Data
import memesData from '../memesData';

const Meme = () => {
  const handleClick = () => {
    const randomUrl = Math.floor(Math.random() * memesData.data.memes.length);
    console.log(memesData.data.memes[randomUrl].url);
  };

  return (
    <main>
      <div className='meme-form' action='submit'>
        <input className='form-input' type='text' placeholder='Top text' />
        <input className='form-input' type='text' placeholder='Bottom text' />
        <button className='meme-btn gradient' onClick={handleClick}>
          Get a new meme image
        </button>
      </div>
    </main>
  );
};

export default Meme;
