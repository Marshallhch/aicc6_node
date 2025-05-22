import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setSidebarOpen } from '../../redux/slices/sidebarSlice';

const Appbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setSidebarOpen())}>
        <MdOutlineMenu />
      </button>
    </div>
  );
};

export default Appbar;
