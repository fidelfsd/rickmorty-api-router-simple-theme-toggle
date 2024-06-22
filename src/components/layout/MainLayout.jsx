import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
   return (
      <>
         <Header />
         <div className="content">
            <Outlet /> {/* Children routes will be rendered here */}
         </div>
         <Footer />
      </>
   );
}
