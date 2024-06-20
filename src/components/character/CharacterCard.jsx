import "@styles/components/CharacterCard.css";
import { useNavigate } from "react-router-dom";

export default function CharacterCard({ character }) {
   const navigate = useNavigate();

   const handleMoreInfoClick = (characterId) => {
      navigate(`/character/${characterId}`);
   };

   return (
      <div className="character-card">
         <img src={character.image} alt={character.name} />
         <div className="character-content">
            <h2>{character.name}</h2>
            <p>{character.species}</p>
         </div>
         <div className="button-container">
            <button onClick={() => handleMoreInfoClick(character.id)}>More Info</button>
         </div>
      </div>
   );
}
