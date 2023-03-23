import { createContext, useState, useEffect } from "react";

export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [platform, setPlatform] = useState("pc");
  const [limit, setLimit] = useState(10);
  const [url, setUrl] = useState(
    `https://api.gametools.network/bf1/servers/?name=&region=all&platform=${platform}&limit=${limit}&lang=en-us&player_filters=oneToFive%2CsixToTen%2CtenPlus%2Cnone`
  );

  useEffect(() => {
    setUrl(
      `https://api.gametools.network/bf1/servers/?name=&region=all&platform=${platform}&limit=${limit}&lang=en-us&player_filters=oneToFive%2CsixToTen%2CtenPlus%2Cnone`
    );
  }, [platform, limit]);

  return (
    <UrlContext.Provider
      value={{
        url,
        setPlatform,
        setLimit,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};
