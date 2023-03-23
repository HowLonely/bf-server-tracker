import { useContext } from "react";
import { UrlContext } from "../../../../context/Servers/ServerContext";

export const Searchbox = () => {
  const { setPlatform } = useContext(UrlContext);

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  return (
    <form className="flex flex-wrap justify-center bg-neutral-800 rounded-xl p-4 gap-10">
      <div className="space-y-3">
        <div>Plataforma</div>
        <select
          name="platform"
          className="bg-neutral-600 rounded-md p-0.5"
          onChange={handlePlatformChange}
        >
          <option value="pc">PC</option>
          <option value="ps4">PlayStation 4</option>
          <option value="xboxone">Xbox One</option>
        </select>
      </div>
      <div className="space-y-3">
        <h2>Nombre</h2>
        <input name="name" type="text" className="rounded-md bg-neutral-600" />
      </div>
      <div className="flex items-center">
        <button className="bg-neutral-600 px-3 rounded-md h-10">Buscar</button>
      </div>
    </form>
  );
};
