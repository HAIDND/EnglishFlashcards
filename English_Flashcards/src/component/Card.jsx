import { useEffect, useState } from "react";
import ItemForm from "./ItemForm";

function Card({ state, handleItem }) {
  // console.log(typeof todoList);

  const [isUpdate, setIsUpdate] = useState(false);
  const [isFlip, setIsFlip] = useState(true);

  function handleUpdateItem() {
    setIsUpdate(!isUpdate);
  }
  const handleDeleteItem = (value) => {
    handleItem({ type: "deleteItem", payload: value });
  };
  function handleState(id) {
    handleItem({ type: "setStatusItem", payload: id });
  }
  function handleFlipCard() {
    setIsFlip(!isFlip);
  }

  return (
    <>
      <li className={`${state.type} li-card`} onClick={() => handleFlipCard()}>
        <input
          value={!state.status}
          checked={state.status}
          className="checkbox"
          type="checkbox"
          onClick={(e) => {
            e.stopPropagation();
            handleState(state.id);
          }}
        />
        <p className={state.status ? "completed" : "incomplete"}>
          {isFlip ? (
            state.word
          ) : (
            <>
              {state.meaning}
              <br /> {state?.example && `(Ex:  ${state?.example || ""} )`}{" "}
            </>
          )}
        </p>
        <button
          onClick={(e) => {
            handleUpdateItem();
            e.stopPropagation();
          }}
        >
          U
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteItem(state.id);
          }}
        >
          X
        </button>
      </li>
      {isUpdate && (
        <ItemForm
          setIsUpdate={setIsUpdate}
          data={state}
          handleItem={handleItem}
        />
      )}
    </>
  );
}

export default Card;
