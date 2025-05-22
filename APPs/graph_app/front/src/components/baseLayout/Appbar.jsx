import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setSidebarOpen } from '../../redux/slices/sidebarSlice';
import AppbarLang from './AppbarLang';

const Appbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="appbar-wrapper lg:ml-[calc(20%+14px)] lg:w-[calc(80%-28px)] w-full bg-gray-950 py-3 px-6 rounded-sm shadow-[0_0_0.25rem_rgba(255,255,255,0.3)] text-gray-300">
      <div className="appbar-contents flex items-center justify-between">
        <div className="appbar-left flex items-center gap-x-3">
          <button
            className="lg:hidden"
            onClick={() => dispatch(setSidebarOpen())}
          >
            <MdOutlineMenu size={24} />
          </button>
          <h3 className="appbar-title text-xl font-semibold">Dashboard</h3>
        </div>
        <div className="appbar-right flex items-center gap-4">
          <div className="appbar-search"></div>
          <AppbarLang />
          <button className="notification"></button>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
