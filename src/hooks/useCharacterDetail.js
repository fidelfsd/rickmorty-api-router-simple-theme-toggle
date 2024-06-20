import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import rickMortyService from "../services/rickMorty";

export const useCharacterDetail = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchCharacter = async () => {
         try {
            const data = await rickMortyService.characters.getById(id);
            setCharacter(data);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchCharacter();
   }, [id]);

   return {
      character,
      error,
      loading,
   };
};
