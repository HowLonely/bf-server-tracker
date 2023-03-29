import { useContext } from "react";
import { ServerSearchContext, ServerSearchProvider } from "../../../../context/ServerSearch/ServerSearchContext";

export const SearchedItems = () => {
  const { data, loading, selected } = useContext(ServerSearchContext);

  if (loading) return <div>Loading ...</div>;
  if (!selected) return <div></div>
  
  return (
    <div>
      {data ? data.servers.map((data) => (
        <div key={data.gameId}>
          {data.prefix}
        </div>
      ) ): <div>No matches</div> }
    </div>
  );
}