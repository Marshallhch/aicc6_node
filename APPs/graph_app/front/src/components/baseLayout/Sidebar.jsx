import React from 'react';
import { Icons } from '../../assets/icons';
import { MdOutlineClose } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  console.log(isSidebarOpen);
  return (
    <div className="sidebar-wrapper bg-gray-950 py-5 px-4 shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] lg:w-[20%] md:w-[30%] w-[50%] h-full flex flex-col rounded-sm z-[999] fixed lg:left-0">
      <div className="sidebar-top mb-[32px] flex items-center justify-between">
        <div className="sidebar-brand flex items-center justify-center gap-x-[12px]">
          <span className="brand-logo bg-blue-700 rounded-md w-8 h-8 flex place-content-center">
            <img src={Icons.LogoWhite} alt="logo" className="w-5" />
          </span>
          <span>Marshall</span>
        </div>
        <button className="sidebar-close text-black p-[0.125rem] rounded-sm bg-white cursor-pointer hover:bg-gray-300">
          <MdOutlineClose />
        </button>
      </div>
      <div className="sidebar-body"></div>
    </div>
  );
};

export default Sidebar;
