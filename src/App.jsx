import { PaginationProvider } from "@context/pagination/PaginationProvider";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@context/theme/ThemeProvider";

function App() {
   return (
      <ThemeProvider>
         <PaginationProvider>
            <RouterProvider router={router} />;
         </PaginationProvider>
      </ThemeProvider>
   );
}

export default App;
