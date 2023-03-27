import { createContext, useState, useEffect, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ServersContext } from "../Servers/ServersContext";

export const ServerSearchContext = createContext();

export const ServerSearchProvider = ({ children }) => {
  const { platform } = useContext(ServersContext);

  const [limit, setLimit] = useState(5);
  const [name, setName] = useState(""); //changing onChange del input (<searchbox />)
  const [url, setUrl] = useState(
    `https://api.gametools.network/bf1/servers/?name=${name}&region=all&platform=${platform}&limit=${limit}&lang=en-us`
  );

  const { data, loading } = useFetch(url);
  
  useEffect(() => {
    data?.servers.map((data) => console.log(data.prefix))
    console.log(`uef p: ${platform} l: ${limit} name: ${name}`)
    setUrl(`https://api.gametools.network/bf1/servers/?name=${name}&region=all&platform=${platform}&limit=${limit}&lang=en-us`)
  }, [name]);

  return (
    <ServerSearchContext.Provider value={{ setName }}>
      {children}
    </ServerSearchContext.Provider>
  );
};
