import React from 'react';
import Helmet from 'react-helmet';

import './home.scss';

const Home = (props: any) => {
  const { children } = props;
  return (
    <>
      <Helmet>
        <title>Hello world</title>
      </Helmet>
      <div className="Home">{children}</div>
    </>
  );
};

export default Home;
