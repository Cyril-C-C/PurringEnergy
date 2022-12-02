import React from 'react';

const TeamContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            Our Heros, <span style={{ color: '#f44336' }}>Our Community</span>
          </h1>
          <p>
            Our high performance culture yields best, sustainable results that
            stand up to the toughest demand and volatility of energy
            marketplace. The biggest names in the industry entrust their pains
            and products to us year after year because our team gets results.
            <br />
            <br />
            We will continue to learn, study and analyse ever - evolving energy
            landscape in taking best and unique opportunities available.
            <br />
            <br />
            We're not rock stars, zombies, or magicians. We're authentic,
            intelligent, experienced professionals ready to exceed your sky-high
            expectations. We value quality, transparency, and accountability,
            and build collaborative partnerships, not vendor relationships.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Team Members</span> ~ 10.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Portfolios</span> ~ 3.
          </p>
          <a
            href='https://www.linkedin.com/company/purringen'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            EXPLORE MORE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='Team.jpg' alt='' />
        </section>
      </section>
      <br />
      <br />
    </section>
  );
};

export default TeamContent;
