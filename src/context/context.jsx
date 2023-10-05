import { createContext, useState } from 'react';

export const DataContext = createContext({
  pageNumber: 0,
  setPageNumber:()=>null,
  itemPerPage:6,
});

export const DataContextProvider = ({children}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 6;
//   const startIndex = pageNumber * itemPerPage;
//   const lastIndex = startIndex + itemPerPage;

  const value = { pageNumber, setPageNumber, itemPerPage };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
