import { useContext } from "react";
import { ServersContext } from "../../../../context/Servers/ServersContext";

export const ServerList = () => {
  const { data, loading } = useContext(ServersContext);

  return (
    <div className="bg-neutral-800 rounded-lg flex-col">
      {loading ? (
        <div className="flex items-center justify-center p-3">Cargando...</div>
      ) : (
        data?.servers.map((server) => (
          <div
            key={server.gameId}
            className="flex flex-wrap justify-between p-3 hover:bg-neutral-700 rounded-lg cursor-pointer"
          >
            <div className="grid grid-cols-8">
              <div className="grid grid-cols-7 sm:col-span-7 col-span-full">
                <div className="sm:col-span-1 col-span-full">
                  <img src={server.url} alt="sv-image" />
                </div>
                <div className="grid sm:col-span-6 col-span-full grid-rows-3 p-3">
                  <div className="font-medium row-span-2 place-items-center">
                    {server.prefix}
                  </div>
                  <div className="row-span-1">
                    {server.region} - {server.currentMap} - {server.mode}
                  </div>
                </div>
              </div>
              <div className="sm:col-span-1 justify-self-end col-span-full">
                {server.serverInfo}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
