import "@styles/components/Pagination.css";

import { usePagination } from "@hooks/usePagination";

export default function Pagination({ totalPages }) {
   const { page, handleNextPage, handlePrevPage } = usePagination();
   return (
      <div className="pagination-container">
         <button onClick={handlePrevPage} disabled={page === 1}>
            Previous
         </button>
         <span>
            Page {page} of {totalPages}
         </span>
         <button
            onClick={() => handleNextPage(totalPages)}
            disabled={page === totalPages}
         >
            Next
         </button>
      </div>
   );
}
