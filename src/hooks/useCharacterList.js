import { useEffect, useState } from "react";
import rickMortyService from "@services/rickMorty";
import { usePagination } from "./usePagination";
import { mapCharacterData } from "@helpers/mapCharacterData";

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
            const { characters, info } = await rickMortyService.characters.getAll(page);
            setCharacters(characters);
            setTotalPages(info.pages);
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
