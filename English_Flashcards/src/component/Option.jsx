import { useState } from "react";
import OptionForm from "./OptionForm";

function Option({ list, dispatch }) {
  const [isOptionForm, setIsOptionForm] = useState(false);
  return (
    <>
      <span>
        <select
          onChange={(e) =>
            dispatch({ type: "setOption", payload: e.target.value })
          }
        >
          {list.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>{" "}
        <button
          onClick={() => {
            setIsOptionForm(!isOptionForm);
            // dispatch({ type: "addOption", payload: "" });
          }}
        >
          Add Option
        </button>
      </span>

      {isOptionForm && (
        <OptionForm
          dispatch={dispatch}
          data={list}
          setIsOpen={setIsOptionForm}
        />
      )}
    </>
  );
}

export default Option;
