import React from 'react';

const Meme = () => {
  return (
    <main>
      <form className='meme-form' action='submit'>
        <input className='form-input' type='text' placeholder='Top text' />
        <input className='form-input' type='text' placeholder='Bottom text' />
        <button className='meme-btn gradient'>Get a new meme image</button>
      </form>
    </main>
  );
};

export default Meme;
