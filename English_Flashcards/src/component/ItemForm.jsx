import { useEffect, useRef, useState } from "react";

function ItemForm({ data, handleItem, setIsUpdate }) {
  const wordRef = useRef();
  const meaningRef = useRef();
  const typeRef = useRef();
  const exampleRef = useRef();
  const updateButtonRef = useRef();
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (wordRef.current) {
      wordRef.current.value = data.word || "";
      wordRef.current.focus();
      setIsDisable(wordRef.current.value.trim() === "");
      meaningRef.current.value = data.meaning || "";
      setIsDisable(meaningRef.current.value.trim() === "");
      typeRef.current.value = data.type || "";
      setIsDisable(typeRef.current.value.trim() === "");
      exampleRef.current.value = data.example || "";
      setIsDisable(exampleRef.current.value.trim() === "");
    }
  }, [data]);

  return (
    <div id="formPopup" className="formUpdate">
      <div className="formBox">
        <label>Word:</label>
        <input
          type="text"
          ref={wordRef}
          onChange={() => setIsDisable(wordRef.current.value.trim() === "")}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              meaningRef.current.focus();
            }
          }}
        />
        <label>Meaning:</label>
        <input
          type="text"
          ref={meaningRef}
          onChange={() => setIsDisable(meaningRef.current.value.trim() === "")}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              typeRef.current.focus();
            }
          }}
        />
        <label>Type:</label>
        <input
          type="text"
          ref={typeRef}
          onChange={() => setIsDisable(typeRef.current.value.trim() === "")}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              exampleRef.current.focus();
            }
          }}
        />
        <label>Example:</label>
        <input
          type="text"
          ref={exampleRef}
          onChange={() => setIsDisable(exampleRef.current.value.trim() === "")}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              updateButtonRef.current.click();
            }
          }}
        />
        <div className="buttonGroup">
          <button
            ref={updateButtonRef}
            // disabled={isDisable}
            onClick={() => {
              const newValue = {
                id: data.id,
                word: wordRef.current.value.trim(),
                meaning: meaningRef.current.value.trim(),
                type: typeRef.current.value.trim(),
                example: exampleRef.current.value.trim(),
              };
              if (newValue) {
                handleItem({
                  type: "updateItem",
                  payload: newValue,
                });
                setIsUpdate(false);
              }
            }}
          >
            Update
          </button>
          <button onClick={() => setIsUpdate(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ItemForm;
