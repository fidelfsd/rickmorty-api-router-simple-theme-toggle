import { useEffect, useState } from "react";
import rickMortyService from "@services/rickMorty";
import { usePagination } from "./usePagination";

export const useCharacterList = () => {
   const { page } = usePagination();
   const [characters, setCharacters] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
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

   return {
      characters,
      totalPages,
      error,
      loading,
   };
};
