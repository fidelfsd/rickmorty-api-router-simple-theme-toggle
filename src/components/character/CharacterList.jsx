import "@styles/components/CharacterList.css";
import CharacterCard from "./CharacterCard";
import Loader from "@components/common/Loader";
import Pagination from "@components/common/Pagination";
import { useCharacterList } from "@hooks/useCharacterList";
import { usePagination } from "@hooks/usePagination";

export default function CharacterList() {
   const { characters, error, totalPages, loading } = useCharacterList();
   const { page, handlePrevPage, handleNextPage } = usePagination();

   if (loading) return <Loader />;
   if (error) return <p>Error: {error}</p>;

   return (
      <div className="character-list-container">
         <Pagination
            page={page}
            totalPages={totalPages}
            onPrevPage={handlePrevPage}
            onNextPage={() => handleNextPage(totalPages)}
            prevLabel="Previous"
            nextLabel="Next"
            style={{ marginBottom: "20px" }}
         />
         <div className="character-list">
            {characters.map((character) => (
               <CharacterCard key={character.id} character={character} />
            ))}
         </div>

         <Pagination
            page={page}
            totalPages={totalPages}
            onPrevPage={handlePrevPage}
            onNextPage={() => handleNextPage(totalPages)}
            prevLabel="Previous"
            nextLabel="Next"
            style={{ marginTop: "20px" }}
         />
      </div>
   );
}
