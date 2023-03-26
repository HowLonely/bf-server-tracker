import { createContext } from "react";

export const ServerInfoContext = createContext();

export const ServerInfoProvider = ({ children }) => {

  return (
    <ServerInfoContext.Provider>
      {children}
    </ServerInfoContext.Provider>
  )
}