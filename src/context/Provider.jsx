import { createContext } from "react";

export const UserContext = createContext();

export default function Provider({ children }) {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}
