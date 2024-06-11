import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharacterDetailsPage from "../pages/CharacterDetailsPage";
import AboutPage from "../pages/AboutPage";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Header />
         <div className="content">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/character/:id" element={<CharacterDetailsPage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </div>
         <Footer />
      </BrowserRouter>
   );
}
