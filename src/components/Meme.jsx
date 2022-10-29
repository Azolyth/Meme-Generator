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
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className='meme-form' action='submit'>
        <input
          className='form-input'
          type='text'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className='form-input'
          type='text'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='meme-btn gradient' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className='meme'>
        <img className='meme-img' src={meme.randomImage} />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
