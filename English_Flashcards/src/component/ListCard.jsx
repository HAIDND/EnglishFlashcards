import { useState } from "react";
import Card from "./Card";

function ListCard({ state, handleItem }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading ? (
        <div>Loadding...</div>
      ) : (
        <ul className="ul-card">
          {state.data.length > 0 ? (
            state.data.map((e) => (
              <Card key={e?.id} state={e} handleItem={handleItem} />
            ))
          ) : (
            <li>No data</li>
          )}
        </ul>
      )}
    </>
  );
}
export default ListCard;
