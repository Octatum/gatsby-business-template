import React from 'react';
import HomeTemplate from '../templates/HomeTemplate';

const HomePage = props => <HomeTemplate {...props} />;

const defaultButtonStructure = {
  text: '',
  url: '',
  alt: '',
};

const defaultReviewStructure = {
  logo: '',
  text: '',
};

const blogReference = {
  img: '',
  title: '',
};

HomePage.defaultProps = {
  data: {
    title: '',
    startBanner: {
      img: '',
      textOverlay: '',
      button: { ...defaultButtonStructure },
    },
    collectionPreview: {
      sliderImages: ['', '', ''],
      button: { ...defaultButtonStructure },
    },
    reviews: Array(3).fill(defaultReviewStructure),
    blogReferences: Array(4).fill(blogReference),
  },
};

export default HomePage;
