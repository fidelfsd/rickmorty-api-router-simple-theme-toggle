import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage, CharacterDetailsPage, AboutPage, NotFoundPage } from "@pages";
import { Footer, Header } from "@components/layout";

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
