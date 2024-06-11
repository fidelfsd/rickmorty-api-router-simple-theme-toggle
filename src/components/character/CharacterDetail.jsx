import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";
import rickMortyService from "../../services/rickMorty";
import "../../styles/components/CharacterDetail.css";

export default function CharacterDetail() {
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
