import { PaginationProvider } from "@context/pagination/PaginationProvider";
import AppRoutes from "./routes";

function App() {
   return (
      <PaginationProvider>
         <AppRoutes />
      </PaginationProvider>
   );
}

export default App;
