/**
 * Adapts character data from the API to the format required by character components.
 * @param {Object} apiCharacterData - The character data received from the API.
 * @returns {Object} - The adapted character data.
 */
export const mapCharacterData = (apiCharacterData) => {
   return {
      id: apiCharacterData.id,
      name: apiCharacterData.name,
      species: apiCharacterData.species,
      image: apiCharacterData.image,
      status: apiCharacterData.status,
      gender: apiCharacterData.gender,
      originName: apiCharacterData.origin?.name,
      locationName: apiCharacterData.location?.name,
      episodeCount: apiCharacterData.episode?.length || 0,
   };
};
