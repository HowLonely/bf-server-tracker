import { useContext } from "react";
import { ServersContext } from "../../../../context/Servers/ServersContext";
import {
  ServerSearchContext,
  ServerSearchProvider,
} from "../../../../context/ServerSearch/ServerSearchContext";

export const Searchbox = () => {
  const { setName } = useContext(ServerSearchContext);

  const handleInputOnChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form className="bg-neutral-800 p-4 rounded-lg flex gap-4">
      <span className="">Nombre:</span>
      <input
        type="text"
        className="rounded-xl bg-neutral-600"
        onChange={handleInputOnChange}
      />
      <button type="submit" className="bg-neutral-600 rounded-lg p-1 px-3">
        Buscar
      </button>
    </form>
  );
};
