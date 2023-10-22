import React from 'react';

const WorksContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            We Provide The Experience{' '}
            <span style={{ color: '#f44336' }}>You Deserve</span>
          </h1>
          <p>
            Every project is born from a special set of challenges. We are proud
            of each and every service we provide, whether for our associates,
            partners, communities, companies, financial or governmental
            institutions. Organizations partner with us to unlock solutions
            catered for their needs today and flexible for what they will want
            tomorrow.
            <br />
            <br />
            Consistency and great timing shape how we build our vision, culture
            and portfolios. We have goals, through which we meet by best
            strategies and intelligences.
            <br />
            <br />
            Purring Energy has experts in: Petrophysics, Geoscience,
            Engineering, and Staffing and Recruitment.
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
          <img src='Works.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default WorksContent;
