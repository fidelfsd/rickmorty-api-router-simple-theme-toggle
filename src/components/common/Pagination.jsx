import PropTypes from "prop-types";
import "@styles/components/Pagination.css";

/**
 * Pagination Component
 *
 * @param {number} page - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @param {function} onPrevPage - Handler for the previous page button.
 * @param {function} onNextPage - Handler for the next page button.
 * @param {string} prevLabel - Label for the previous page button.
 * @param {string} nextLabel - Label for the next page button.
 * @param {object} style - Custom styles for the pagination container.
 */
export default function Pagination({
   page,
   totalPages,
   onPrevPage,
   onNextPage,
   prevLabel = "Previous",
   nextLabel = "Next",
   style = {},
}) {
   return (
      <div className="pagination-container" style={style}>
         <button onClick={onPrevPage} disabled={page === 1}>
            {prevLabel}
         </button>
         <span>
            Page {page} of {totalPages}
         </span>
         <button onClick={onNextPage} disabled={page === totalPages}>
            {nextLabel}
         </button>
      </div>
   );
}

Pagination.propTypes = {
   page: PropTypes.number.isRequired,
   totalPages: PropTypes.number.isRequired,
   onPrevPage: PropTypes.func.isRequired,
   onNextPage: PropTypes.func.isRequired,
   prevLabel: PropTypes.string,
   nextLabel: PropTypes.string,
   style: PropTypes.object,
};
