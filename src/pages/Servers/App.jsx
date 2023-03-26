import { ServersProvider } from "../../context/Servers/ServersContext";
import { Searchbox } from "./components/Searchbox";
import { ServerList } from "./components/ServerList";

export const Server = () => (
  <ServersProvider>
    <div className="grid gap-4 place-items-center p-20">
      <h1 className="font-bold text-lg">Battlefield Servers</h1>
      <Searchbox></Searchbox>
      <ServerList />
    </div>
  </ServersProvider>
);
