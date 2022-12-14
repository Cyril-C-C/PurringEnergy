import React from 'react';

const CareersContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            Bring Your Dreams Alive{' '}
            <span style={{ color: '#f44336' }}>With Us</span>
          </h1>
          <p>
            Purring offers opportunities to interested candidates who want to
            add values to our community.
            <br />
            <br />
            Potential applicants whose skill sets align to: Climate
            Intelligence, Petrophysics, Geoscience, Engineering, Energy and
            Environmental Economics, Energy Law, Energy Banking and Finance, and
            Tax should reach out to our Human Resource department to find out if
            there are job openings.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Our Focus</span> ~
            Diversity-Inclusion-Belonging (DIB) and Equity.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>End - Goal</span> ~ Freedom.
          </p>
          <a
            href='https://www.linkedin.com/company/purringen/jobs/?viewAsMember=true'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            APPLY VIA LINKEDIN
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='Careers.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default CareersContent;
