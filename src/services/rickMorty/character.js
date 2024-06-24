import { mapCharacterData } from "@helpers/mapCharacterData";

const BASE_URL = "https://rickandmortyapi.com/api/character";

const characterService = {
   getAll: async function (page = 1) {
      // await sleep(500);
      const apiUrl = `${BASE_URL}/?page=${page}`;
      try {
         const response = await fetch(apiUrl);
         if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
         }

         const data = await response.json();

         const mappedCharacters = data.results.map((character) =>
            mapCharacterData(character)
         );
         const info = data.info;

         return { characters: mappedCharacters, info: info };
      } catch (error) {
         console.error("Error in getAll:", error);
         throw error;
      }
   },

   getById: async function (id) {
      // await sleep(500);
      const apiUrl = `${BASE_URL}/${id}`;
      try {
         const response = await fetch(apiUrl);
         if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
         }
         const character = await response.json();

         return mapCharacterData(character);
      } catch (error) {
         console.error("Error in getById:", error);
         throw error;
      }
   },
};

const sleep = (t) => new Promise((r) => setTimeout(r, t));

export default characterService;
