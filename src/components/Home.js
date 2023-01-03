import React from 'react';
import NextCard from './NextCard';

function Home() {
  return (
    <>
      <p className='header'>Created by Christian Drouin. Feel free to check out my site here:
        <a className='header-link' href={'https://main.dnus91yybbo0k.amplifyapp.com/'} target="_blank" rel="noopener noreferrer"> Click Me</a>
      </p>
      <div className='container'>
        <h1>Sorry!</h1>
        <NextCard />
      </div>
    </>
  );
}

export default Home;
