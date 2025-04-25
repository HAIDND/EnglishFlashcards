import { useEffect, useRef, useState } from "react";

function Input({ handleAddNote }) {
  const inputRef = useRef();
  const handleSave = () => {
    if (inputRef.current.value.trim() !== "") {
      handleAddNote({
        type: "updateData",
        payload: { word: inputRef.current.value },
      });
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        placeholder="Note..."
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            handleSave();
          }
        }}
      />
      <button onClick={() => handleSave()}>Save Note</button>
    </>
  );
}

export default Input;
