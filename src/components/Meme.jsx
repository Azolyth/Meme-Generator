import React, { useState } from 'react';

// Data
import memesData from '../memesData';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
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
      <img className='meme-img' src={meme.randomImage} />
    </main>
  );
};

export default Meme;
