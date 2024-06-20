import { useEffect, useState } from "react";
import rickMortyService from "@services/rickMorty";

export const useCharacterList = () => {
   const [characters, setCharacters] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchCharacters = async () => {
         setLoading(true);
         try {
            const data = await rickMortyService.characters.getAll(page);
            setCharacters(data.results);
            setTotalPages(data.info.pages);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchCharacters();
   }, [page]);

   const handlePrevPage = () => {
      if (page > 1) setPage(page - 1);
   };

   const handleNextPage = () => {
      if (page < totalPages) setPage(page + 1);
   };

   return {
      characters,
      page,
      totalPages,
      error,
      loading,
      handleNextPage,
      handlePrevPage,
   };
};
