/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Projects from '@scenes/Projects';
import MailUs from '@scenes/MailUs';
import PropTypes from 'prop-types';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Works from './components/Works';


import styles from './HomePage.module.scss';

const HomePage = ({ animation }) => {
  return (
    <div className={styles.container}>
      <div className="pageWrapper">
        <Hero animation={animation} />
        <WhatWeDo />
      </div>
      <Works />
      <div className="pageWrapper">
        <Projects title="Projects" navigation />
      </div>
      <Testimonials />
      <Gallery />
      
      <MailUs />
    </div>
  );
};

HomePage.propTypes = {
  animation: PropTypes.any,
};

export default HomePage;
