import { createBrowserRouter } from "react-router-dom";
import { HomePage, CharacterDetailsPage, AboutPage, NotFoundPage } from "@pages";
import { MainLayout } from "@components/layout";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: "character/:id",
            element: <CharacterDetailsPage />,
         },
         {
            path: "about",
            element: <AboutPage />,
         },
         {
            path: "*",
            element: <NotFoundPage />,
         },
      ],
   },
]);

export default router;
