import { createContext, useState, useEffect, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ServersContext } from "../Servers/ServersContext";

export const ServerSearchContext = createContext();

export const ServerSearchProvider = ({ children }) => {
  const { platform } = useContext(ServersContext);
  const [limit, setLimit] = useState(5);
  const [name, setName] = useState(""); //changing onChange del input (<searchbox />)
  const [url, setUrl] = useState("");
  const [selected, setSelected] = useState(null); //Verifica que el input esté seleccionado

  //Retorna 5 items filtrados
  const { data, loading, setData } = useFetch(url);

  useEffect(() => {
    data?.servers.map((server) => console.log(server.prefix));
    if (selected && name !== "") {
      setUrl(
        `https://api.gametools.network/bf1/servers/?name=${name}&region=all&platform=${platform}&limit=${limit}&lang=en-us`
      );
    } else {
    }
  }, [name, selected]);

  return (
    <ServerSearchContext.Provider
      value={{ data, loading, setName, selected, setSelected }}
    >
      {children}
    </ServerSearchContext.Provider>
  );
};
