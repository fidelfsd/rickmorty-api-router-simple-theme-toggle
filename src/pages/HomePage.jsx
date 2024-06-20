import CharacterList from "@components/character/CharacterList";
import "@styles/pages/HomePage.css";

export default function HomePage() {
   return (
      <div className="home">
         <h1>Rick and Morty Characters</h1>
         <CharacterList />
      </div>
   );
}
