import { useContext } from "react";
import PaginationContext from "@context/pagination/PaginationContext";

export function usePagination() {
   return useContext(PaginationContext);
}
