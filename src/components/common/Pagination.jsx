import PropTypes from "prop-types";
import "@styles/components/Pagination.css";

/**
 * Pagination Component
 *
 * @param {number} page - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @param {function} onPageChange - Handler for page change.
 * @param {string} prevLabel - Label for the previous page button.
 * @param {string} nextLabel - Label for the next page button.
 * @param {object} style - Custom styles for the pagination container.
 */
const Pagination = ({
   page,
   totalPages,
   onPageChange,
   prevLabel = "Previous",
   nextLabel = "Next",
   style = {},
}) => {
   const getPageNumbers = () => {
      const delta = 2;
      const range = [];
      const start = Math.max(2, page - delta);
      const end = Math.min(totalPages - 1, page + delta);

      for (let i = start; i <= end; i++) {
         range.push(i);
      }

      return range;
   };

   const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
         onPageChange(newPage);
      }
   };

   return (
      <div className="pagination-container" style={style}>
         <button onClick={() => handlePageChange(1)} disabled={page === 1}>
            First
         </button>
         <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            {prevLabel}
         </button>
         {getPageNumbers().map((num) => (
            <button
               key={num}
               onClick={() => handlePageChange(num)}
               className={num === page ? "active" : ""}
            >
               {num}
            </button>
         ))}
         <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
         >
            {nextLabel}
         </button>
         <button
            onClick={() => handlePageChange(totalPages)}
            disabled={page === totalPages}
         >
            Last
         </button>
      </div>
   );
};

Pagination.propTypes = {
   page: PropTypes.number.isRequired,
   totalPages: PropTypes.number.isRequired,
   onPageChange: PropTypes.func.isRequired,
   prevLabel: PropTypes.string,
   nextLabel: PropTypes.string,
   style: PropTypes.object,
};

export default Pagination;
