import React from 'react';

const AboutContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            To Your Exciting{' '}
            <span style={{ color: '#f44336' }}>Realities...</span>
          </h1>
          <p>
            Purring Energy is an energy solution product and servicing company
            committed to proffering incredible and sustainable values to its
            clients and communities. Its esteemed clients cut across major and
            independent Oil & Gas, Exploration and Production (E&P), Renewable
            Energy companies, and financial institutions funding energy
            projects.
            <br />
            <br />
            Petrophysics, Geoscience, Engineering with sound sense of Climate
            Intelligence, and Staffing and Recruitment are main services we
            provide. Integration, listening and making business - focused
            interpretation of sub - surface as well as surface Geoscience and
            Engineering data are our core competences; with the view to
            presenting and enriching our esteemed clients with sound integrated
            solutions.
            <br />
            <br />
            Purring Energy started operation in 2019 shortly after its
            establishment.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Founded</span> ~ 2019.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Specialties</span> ~ Climate
            Intelligence, Petrophysics, Geoscience, Engineering, Staffing and
            Recruitment, General Contracts.
          </p>
          <a
            href='https://twitter.com/_Purring_?t=3tbsLvQKm_qYSVL9DBlcbg&s=08'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            EXPLORE MORE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='About.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default AboutContent;
