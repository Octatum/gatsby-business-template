import React from 'react';
import AboutTemplate from '../templates/AboutTemplate';

const AboutPage = props => <AboutTemplate {...props} />;

AboutPage.defaultProps = {
  data: {
    title: '',
    startBanner: {
      img: '',
      textOverlay: '',
    },
    missionBanner: {
      img: '',
      text: '',
    },
    visionBanner: {
      img: '',
      text: '',
    },
  },
};

export default AboutPage;
