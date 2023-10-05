import React, { useState } from 'react';
import { data } from '../data/data';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import '../App.css';
import Card from './card.component';
const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 6;
  const startIndex = pageNumber * itemPerPage;
  const lastIndex = startIndex + itemPerPage;

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='grid grid-cols-3'>
      {data.slice(startIndex, lastIndex).map((item) => (
        <Card item={item} />
      ))}
      <ReactPaginate
        breakLabel='...'
        nextLabel={
          <span className='w-8 h-8 flex items-center justify-center bg-gray-400 rounded-md ml-4'>
            {' '}
            <BsChevronRight />{' '}
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel={
          <span className='w-8 h-8 flex items-center justify-center bg-gray-400 rounded-md mr-4'>
            {' '}
            <BsChevronLeft />{' '}
          </span>
        }
        renderOnZeroPageCount={null}
        containerClassName='flex items-center justify-center mt-8 mb-4 '
        pageClassName=' 
        hover:bg-gray-400 w-9 h-9 flex items-center justify-center 
        rounded-lg'
        activeClassName='bg-sky-400'
      />
    </div>
  );
};

export default Home;
