import React, { useEffect } from 'react';
import HeadTitle from './HeadTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVisitors } from '../../redux/slices/apiSlice';

const Visitors = () => {
  const state = useSelector((state) => state.apis.visitorsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVisitors());
  }, [dispatch]);

  console.log(state);
  return (
    <div className="block-wrap w-full mt-[14px] lg:mt-0">
      <HeadTitle title="Visitors Insights" />
    </div>
  );
};

export default Visitors;
