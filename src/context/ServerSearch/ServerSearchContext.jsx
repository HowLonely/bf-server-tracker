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
  const { data, loading } = useFetch(url);

  useEffect(() => {
    if (selected && name) {
      setUrl(
        `https://api.gametools.network/bf1/servers/?name=${name}&region=all&platform=${platform}&limit=${limit}&lang=en-us`
      );
    }
  }, [name, selected]);

  return (
    <ServerSearchContext.Provider
      value={{ data, loading, setName, selected, setSelected, name }}
    >
      {children}
    </ServerSearchContext.Provider>
  );
};
