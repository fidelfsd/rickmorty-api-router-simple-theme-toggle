import { PaginationProvider } from "@context/pagination/PaginationProvider";
import router from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
   return (
      <PaginationProvider>
         <RouterProvider router={router} />;
      </PaginationProvider>
   );
}

export default App;
