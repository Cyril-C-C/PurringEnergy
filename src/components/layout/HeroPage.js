import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  return (
    <Fragment>
      <section className='text-box' id='text-box'>
        <h1>
          Climate Intelligence{' '}
          <span style={{ color: '#f44336' }}>towards Sustainability</span>
        </h1>
        <p>
          Supporting fast - evolving energy landscape with instrumentalities of
          climate intelligence to exciting realities.
        </p>
        <Link to='/About' className='hero-btn' id='hero-btn'>
          Visit Us To Know More
        </Link>
      </section>
    </Fragment>
  );
};

export default HeroPage;
