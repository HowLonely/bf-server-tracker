import { useContext } from "react";

import { UrlContext } from "../../../../context/Servers/ServerContext";
import { useFetch } from "../../../../hooks/useFetch";

export const ServerList = () => {
  const { url } = useContext(UrlContext);
  const { data, loading } = useFetch(url);

  return (
    <div className="bg-neutral-800 rounded-lg flex-col">
      {loading ? (
        <div className="flex items-center justify-center">Cargando...</div>
      ) : (
        data?.servers.map((server) => (
          <div
            key={server.prefix}
            className="flex flex-wrap justify-between p-3 hover:bg-neutral-700 rounded-lg cursor-pointer"
          >
            <div className="flex gap-3 p-2">
              <img src={server.url} alt="sv-image" className="w-20 h-20" />
              <div className="w-2/3 flex-wrap">
                <div className="">{server.prefix}</div>
                <div className="">
                  {server.region} - {server.currentMap} - {server.mode}
                </div>
              </div>
            </div>
            <div className="">{server.serverInfo}</div>
          </div>
          // <div
          //   key={server.prefix}
          //   className="grid grid-cols-6 gap-4 justify-between p-3 hover:bg-neutral-700 rounded-lg cursor-pointer"
          // >
          //   <div className="col-span-5 gap-3 p-2 content-center">
          //     <img src={server.url} alt="sv-image" className="w-20 h-20" />
          //     <div className="">
          //       <div className="">{server.prefix}</div>
          //       <div className="">
          //         {server.region} - {server.currentMap} - {server.mode}
          //       </div>
          //     </div>
          //   </div>
          //   <div className="">{server.serverInfo}</div>
          // </div>
        ))
      )}
    </div>
  );
};
