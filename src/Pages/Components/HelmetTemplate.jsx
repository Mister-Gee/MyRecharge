import React from 'react';
import Helmet from 'react-helmet';


const HelmetTemplate = ({title}) => {
  return (
    <Helmet>
        <title>{title} | My Recharge</title>
    </Helmet>
  )
}

export default HelmetTemplate