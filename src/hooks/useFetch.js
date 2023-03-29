import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    /* abortController permite que una petición
    cuando sea interrumpida no llegue al sv
    (ahorrar recursos de red) */
    setLoading(true);

    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => abortController.abort();
    /*Funcion de limpieza (limpia timeout, listener, etc)
    cuando el componente ya no es visible en
    pantalla */
  }, [url]);

  return { data, loading, error, setData }; //setData exportado para el searchbox (test)
};
