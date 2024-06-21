import "@styles/components/CharacterList.css";
import CharacterCard from "./CharacterCard";
import Loader from "@components/common/Loader";
import { useCharacterList } from "@hooks/useCharacterList";
import Pagination from "@components/common/Pagination";

export default function CharacterList() {
   const { characters, error, totalPages, loading } = useCharacterList();

   if (loading) return <Loader />;
   if (error) return <p>Error: {error}</p>;

   return (
      <div className="character-list-container">
         <Pagination totalPages={totalPages} />
         <div className="character-list">
            {characters.map((character) => (
               <CharacterCard key={character.id} character={character} />
            ))}
         </div>
         <Pagination totalPages={totalPages} />
      </div>
   );
}
