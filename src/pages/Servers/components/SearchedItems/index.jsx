import { useContext } from "react";
import { ServerSearchContext } from "../../../../context/ServerSearch/ServerSearchContext";

export const SearchedItems = () => {
  const { data, loading, selected, name } = useContext(ServerSearchContext);

  if (!selected) return <div></div>;
  if (!name) return <div></div>;
  if (loading) return <div>Loading ...</div>;
  if (data?.servers.length == 0 && !loading) return <div>No matches</div>;

  return <div>{data?.servers.map((server) => <div key={server.serverId}>{server.prefix}</div>)}</div>;
};
