import { ServersProvider } from "../../context/Servers/ServersContext";
import { ServerSearchProvider } from "../../context/ServerSearch/ServerSearchContext";
import { FilterBox } from "./components/FilterBox";
import { Searchbox } from "./components/Searchbox";
import { SearchedItems } from "./components/SearchedItems";
import { ServerList } from "./components/ServerList";


export const Server = () => (
  <ServersProvider>
    <div className="grid gap-4 place-items-center p-20">
      <h1 className="font-bold text-lg">Battlefield Servers</h1>
      <ServerSearchProvider>
        <Searchbox></Searchbox>
        <SearchedItems></SearchedItems>
      </ServerSearchProvider>
      <FilterBox></FilterBox>
      <ServerList />
    </div>
  </ServersProvider>
);
