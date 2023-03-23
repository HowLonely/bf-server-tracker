import { UrlProvider } from "../../context/Servers/ServerContext";
import { fetchData } from "../../services/fetchData";
import { Searchbox } from "./components/Searchbox";
import { ServerList } from "./components/ServerList";

export const Server = () => (
  <UrlProvider>
    <div className="flex-col items-center space-y-5 p-20">
      <h1 className="font-bold">Battlefield Servers</h1>
      <Searchbox></Searchbox>
      <ServerList />
    </div>
  </UrlProvider>
);
