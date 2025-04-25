import { useEffect, useRef, useState } from "react";

function OptionForm({ data, dispatch, setIsOpen }) {
  const inputRef = useRef();
  const addButtonRef = useRef();

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.value = data.content || "";
  //     setIsDisable(inputRef.current.value.trim() === "");
  //   }
  // }, [data]);
  const h = "huhu".trim();
  return (
    <div id="formPopup" className="formUpdate">
      <div className="formBox">
        <label>Option:</label>
        <input
          type="text"
          ref={inputRef}
          // onChange={() => setIsDisable(inputRef.current.value.trim() === "")}
          onKeyDown={(e) => {
            if (e.code === "Enter") addButtonRef.current.click();
          }}
        />
        <div className="buttonGroup">
          <button
            ref={addButtonRef}
            // disabled={isDisable}
            onClick={() => {
              const newValue = inputRef.current.value.trim();
              if (newValue !== "") {
                dispatch({
                  type: "addOption",
                  payload: newValue,
                });
                setIsOpen(false);
              }
            }}
          >
            Add
          </button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default OptionForm;
