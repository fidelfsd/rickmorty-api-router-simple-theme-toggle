import { Link } from "react-router-dom";
import ThemeSwitcher from "@components/common/ThemeSwitcher";
import "@styles/layout/Header.css";

export default function Header() {
   return (
      <header className="header">
         <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
         </nav>
         <ThemeSwitcher />
      </header>
   );
}
