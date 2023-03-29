import { useContext } from "react";
import { ServerSearchContext } from "../../../../context/ServerSearch/ServerSearchContext";

export const Searchbox = () => {
  const { setName, setSelected } = useContext(ServerSearchContext);

  const handleInputOnChange = (e) => {
    setName(e.target.value);
  };
  const handleInputOnSelect = (e) => {
    setSelected(true);
  };
  const handleInputOnBlur = (e) => {
    setSelected(false);
  };

  return (
    <>
      <form className="bg-neutral-800 p-4 rounded-lg flex gap-4">
        <span className="">Nombre:</span>
        <input
          type="text"
          className="rounded-xl bg-neutral-600"
          onChange={handleInputOnChange}
          onSelect={handleInputOnSelect}
          onBlur={handleInputOnBlur}
        />
        <button type="submit" className="bg-neutral-600 rounded-lg p-1 px-3">
          Buscar
        </button>
      </form>
    </>
  );
};
