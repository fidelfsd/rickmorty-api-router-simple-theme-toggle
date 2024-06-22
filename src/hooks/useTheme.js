import ThemeContext from "@context/theme/ThemeContext";
import { useContext } from "react";

export function useTheme() {
   return useContext(ThemeContext);
}
