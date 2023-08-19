import {AiOutlineDoubleRight , AiOutlineDoubleLeft} from 'react-icons/ai'


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        className={`px-3 py-1 mr-2 rounded ${
          isFirstPage ? 'bg-gray-300 cursor-not-allowed px-4 py-2 text-xl ' : 'bg-primary px-4 py-2 text-xl text-white hover:bg-primary hover:opacity-80'
        }`}
      >
        <AiOutlineDoubleLeft/>
      </button>
      <span className="text-gray-600 px-6">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        className={`px-3 py-1 ml-2 rounded ${
          isLastPage ? 'bg-gray-300 cursor-not-allowed px-4 py-2 text-xl ' : ' bg-primary px-4 py-2 text-xl text-white hover:bg-primary hover:opacity-80'
        }`}
      >
       <AiOutlineDoubleRight/>
      </button>
    </div>
  );
};

export default Pagination;
