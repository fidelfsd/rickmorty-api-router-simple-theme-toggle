import Loader from "../common/Loader";
import "../../styles/components/CharacterDetail.css";
import { useCharacterDetail } from "../../hooks/useCharacterDetail";

export default function CharacterDetail() {
   const { character, error, loading } = useCharacterDetail();

   if (loading) return <Loader />;
   if (error) return <p className="error-message">Error: {error}</p>;

   return (
      <div className="character-detail">
         <div className="character-detail-card">
            <img src={character.image} alt={character.name} className="character-image" />
            <div className="character-info">
               <h1>{character.name}</h1>
               <div className="detail-section">
                  <p>
                     <strong>Status:</strong> {character.status}
                  </p>
                  <p>
                     <strong>Species:</strong> {character.species}
                  </p>
                  <p>
                     <strong>Gender:</strong> {character.gender}
                  </p>
               </div>
               <div className="detail-section">
                  <p>
                     <strong>Origin:</strong> {character.origin.name}
                  </p>
                  <p>
                     <strong>Location:</strong> {character.location.name}
                  </p>
               </div>
               <div className="detail-section">
                  <p>
                     <strong>Episodes:</strong> {character.episode.length}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
