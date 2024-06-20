import "@styles/components/CharacterList.css";
import CharacterCard from "./CharacterCard";
import Loader from "@components/common/Loader";
import { useCharacterList } from "@hooks/useCharacterList";

export default function CharacterList() {
   const {
      characters,
      error,
      page,
      totalPages,
      loading,
      handlePrevPage,
      handleNextPage,
   } = useCharacterList();

   if (loading) return <Loader />;
   if (error) return <p>Error: {error}</p>;

   return (
      <div className="character-list-container">
         <div className="character-list">
            {characters.map((character) => (
               <CharacterCard key={character.id} character={character} />
            ))}
         </div>
         <div className="pagination-container">
            <button onClick={handlePrevPage} disabled={page === 1}>
               Previous
            </button>
            <span>
               Page {page} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={page === totalPages}>
               Next
            </button>
         </div>
      </div>
   );
}
