import { useContext } from "react";
import { ServersContext } from "../../../../context/Servers/ServersContext";

export const Searchbox = () => {
  const { setPlatform, setLimit } = useContext(ServersContext);

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div className="bg-neutral-800 rounded-lg p-5 flex flex-wrap gap-6 justify-center">
      <div className="grid gap-2">
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
      <div className="grid gap-2 place-items-center">
        <div>Mostrar</div>
        <select
          name="limit"
          id="server-limit"
          className="bg-neutral-600 rounded-md p-0.5"
          onChange={handleLimitChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">50</option>
          <option value="80">100</option>
        </select>
      </div>
    </div>
  );
};
