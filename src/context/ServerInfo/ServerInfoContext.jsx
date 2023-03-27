import { createContext } from "react";
import { useFetch } from "../../hooks/useFetch";

export const ServerInfoContext = createContext();

export const ServerInfoProvider = ({ children }) => {

  

  return (
    <ServerInfoContext.Provider>
      {children}
    </ServerInfoContext.Provider>
  )
}