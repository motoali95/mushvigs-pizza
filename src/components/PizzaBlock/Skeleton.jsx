import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={13578}
    width={280}
    height={400}
    viewBox="0 0 400 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="138" cy="130" r="130" />
    <rect x="0" y="279" rx="10" ry="10" width="230" height="23" />
    <rect x="0" y="321" rx="10" ry="10" width="230" height="88" />
    <rect x="0" y="431" rx="10" ry="10" width="75" height="30" />
    <rect x="127" y="422" rx="24" ry="25" width="100" height="45" />
  </ContentLoader>
);

export default Skeleton;
