import React from 'react';

import './pagination.css';

const Pagination = ({ launchesPerPage, totalLaunches, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLaunches / launchesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="center">
      <div className="pagination">
        {
          currentPage > 1 ?
            <span onClick={() => paginate(currentPage - 1)}>&laquo;</span>
          :
            null
        }
        {
          pageNumbers.map(number => (
            <span className={currentPage === number ? 'active' : ''} onClick={() => paginate(number)}>
              { number }
            </span>
          ))
        }
        {
          currentPage < pageNumbers.length ?
            <span onClick={() => paginate(currentPage + 1)}>&raquo;</span>
          :
            null
        }
      </div>
    </div>
  )
}

export default Pagination;