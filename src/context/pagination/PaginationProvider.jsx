import { useState } from "react";
import PaginationContext from "./PaginationContext"; // Importa el contexto desde su ubicación

export function PaginationProvider({ children }) {
   const [page, setPage] = useState(1);

   const handlePageChange = (newPage) => setPage(newPage);
   const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
   const handleNextPage = (totalPages) =>
      setPage((prevPage) => Math.min(prevPage + 1, totalPages));

   return (
      <PaginationContext.Provider
         value={{ page, setPage, handlePageChange, handlePrevPage, handleNextPage }}
      >
         {children}
      </PaginationContext.Provider>
   );
}
