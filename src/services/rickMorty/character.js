const BASE_URL = "https://rickandmortyapi.com/api/character";

const characterService = {
   getAll: async function (page = 1) {
      await sleep(500);
      const apiUrl = `${BASE_URL}/?page=${page}`;
      try {
         const response = await fetch(apiUrl);
         if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
         }
         return await response.json();
      } catch (error) {
         console.error("Error in getAll:", error);
         throw error;
      }
   },

   getById: async function (id) {
      await sleep(500);
      const apiUrl = `${BASE_URL}/${id}`;
      try {
         const response = await fetch(apiUrl);
         if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
         }
         return await response.json();
      } catch (error) {
         console.error("Error in getById:", error);
         throw error;
      }
   },
};

const sleep = (t) => new Promise((r) => setTimeout(r, t));

export default characterService;
