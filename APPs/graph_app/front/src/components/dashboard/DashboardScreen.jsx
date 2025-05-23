import React from 'react';
import Sales from './Sales';
import Visitors from './Visitors';

const DashboardScreen = () => {
  return (
    <div className="contents-area lg:ml-[calc(20%+14px)] lg:w-[calc(80%-28px)] w-full mt-[14px]">
      <div className="area-row area-top lg:grid lg:grid-cols-[4fr_3fr] gap-[14px] mt-[14px]">
        <Sales />
        <Visitors />
      </div>
      <div className="area-row area-bottom"></div>
    </div>
  );
};

export default DashboardScreen;
