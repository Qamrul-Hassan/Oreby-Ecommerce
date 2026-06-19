import React from 'react'

const PaginationArea = ({ pageNumber, paginate, prev, next, currentPage, resPagination }) => {
  return (
    <>
      <nav className='py-3 block' aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          {pageNumber.length > 0 &&
            <li onClick={prev}>
              <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg cursor-pointer">Previous</a>
            </li>
          }
          {resPagination &&
            pageNumber.map((item, i) => (
              <li onClick={() => paginate(item)} className={currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 cursor-pointer bg-black" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 cursor-pointer bg-white"}>{item + 1}</li>
            ))
          }
          {pageNumber.length > 0 &&
            <li onClick={next}>
              <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg cursor-pointer">Next</a>
            </li>
          }
        </ul>
      </nav>
    </>
  )
}

export default PaginationArea