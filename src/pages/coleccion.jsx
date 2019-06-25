import React from 'react';
import CollectionTemplate from '../templates/CollectionTemplate';

const CollectionPage = props => <CollectionTemplate {...props} />;

CollectionPage.defaultProps = {
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

export default CollectionPage;
