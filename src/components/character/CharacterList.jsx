// src/components/CharacterList/CharacterList.js
import { useEffect, useState } from "react";
import rickMortyService from "../../services/rickMorty";
import Loader from "../common/Loader";
import CharacterCard from "./CharacterCard";
import "../../styles/components/CharacterList.css";

export default function CharacterList() {
   const [characters, setCharacters] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [page, setPage] = useState(1); // Estado para la página actual
   const [totalPages, setTotalPages] = useState(0); // Estado para el número total de páginas

   useEffect(() => {
      const fetchCharacters = async () => {
         setLoading(true); // Mostrar el cargador al cambiar de página
         try {
            const data = await rickMortyService.characters.getAll(page); // Pasar la página al servicio
            setCharacters(data.results);
            setTotalPages(data.info.pages); // Establecer el número total de páginas
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchCharacters();
   }, [page]); // Agregar `page` como dependencia para recargar al cambiar de página

   // Manejar la navegación de la página
   const handlePrevPage = () => {
      if (page > 1) setPage(page - 1);
   };

   const handleNextPage = () => {
      if (page < totalPages) setPage(page + 1);
   };

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
