import React from 'react';
import DetailTemplate from '../templates/DetailTemplate';

const DetailPage = props => <DetailTemplate {...props} />;

DetailPage.defaultProps = {
  title: '',
  description: '',
  images: [
    {
      title: 'image1',
      description: 'cool image1',
      src: 'img.png',
    },
    {
      title: 'image1',
      description: 'cool image1',
      src: 'img.png',
    },
  ],
};

export default DetailPage;
