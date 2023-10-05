import React, { useContext } from 'react';
import { data } from '../data/data';

import '../App.css';
import Card from './card.component';
import Pagination from './pagination.component';
import { DataContext } from '../context/context';
const Home = () => {
  const { pageNumber, itemPerPage } = useContext(DataContext);
  const startIndex = pageNumber * itemPerPage;
  const lastIndex = startIndex + itemPerPage;

  return (
    <div className='grid grid-cols-3'>
      {data.slice(startIndex, lastIndex).map((item) => (
        <Card item={item} />
      ))}

      <Pagination />
    </div>
  );
};

export default Home;
