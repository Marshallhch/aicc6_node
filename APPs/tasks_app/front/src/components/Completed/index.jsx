import React from 'react';
import Navbar from '../Common/Navbar';
import ItemPanel from '../Common/ItemPanel';

const index = () => {
  return (
    <div>
      <Navbar />
      <ItemPanel pageTitle="Completed Items" />
    </div>
  );
};

export default index;
