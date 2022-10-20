import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';

export const PaginatedItems = ({itemsPerPage,items}) => {


  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);


  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(items.length / itemsPerPage));

  }, [itemOffset, itemsPerPage]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
      <>
         <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                      <h3>Item #{item}</h3>
                    </div>
                ))}
        </>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
      </>
  );
}
