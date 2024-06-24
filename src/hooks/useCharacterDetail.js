import rickMortyService from "@services/rickMorty";
import { mapCharacterData } from "@helpers/mapCharacterData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useCharacterDetail = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchCharacter = async () => {
         try {
            const data = await rickMortyService.characters.getById(id);
            setCharacter(mapCharacterData(data));
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
