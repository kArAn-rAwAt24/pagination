import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { DataContext } from '../context/context';

const Pagination = () => {
  const { pageNumber,itemPerPage,setPageNumber } = useContext(DataContext);
   
  console.log(pageNumber,itemPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
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
  );
};

export default Pagination;
