import { createContext, useState, useEffect } from "react";

import { useFetch } from "../../hooks/useFetch";

export const ServersContext = createContext();

export const ServersProvider = ({ children }) => {
  const [platform, setPlatform] = useState("pc");
  const [limit, setLimit] = useState(5);
  const [url, setUrl] = useState(
    `https://api.gametools.network/bf1/servers/?name=&region=all&platform=${platform}&limit=${limit}&lang=en-us&player_filters=oneToFive%2CsixToTen%2CtenPlus%2Cnone`
  );

  //Extrae la data y el estado loading del CustomHook
  const { data, loading } = useFetch(url); //useFetch se lanza cada vez que cambia la URL

  useEffect(() => {
    setUrl(
      `https://api.gametools.network/bf1/servers/?name=&region=all&platform=${platform}&limit=${limit}&lang=en-us&player_filters=oneToFive%2CsixToTen%2CtenPlus%2Cnone`
    );
  }, [platform, limit]);

  return (
    <ServersContext.Provider
      value={{
        url,
        setPlatform,
        setLimit,
        data,
        loading,
      }}
    >
      {children}
    </ServersContext.Provider>
  );
};
