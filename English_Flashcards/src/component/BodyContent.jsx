import ListCard from "./ListCard";
import Option from "./Option";
import Input from "./Input";
import {
  getLocalData,
  updateLocalData,
  removeLocalData,
} from "../services/dataService";
import { useEffect, useReducer, useState } from "react";

//option : context [kitchen,outdoor,office]
//sample data { data:[ word: 'human', mean: 'people',type: 'n/adj/adv' ,isLearned : 'true/false' ]}
//feature: addNewWord/updateWord/deleteWord/changeStatus/
const initialState = {
  data: [],
  listOption: getLocalData("Option"),
  option: "",
};
function updateLocalAndReturnState(state, newState) {
  updateLocalData(state.option, newState);
  return { ...state, data: newState };
}
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "setOption": {
      return {
        ...state,
        option: action.payload,
        data: getLocalData(action.payload),
      };
    }
    //get list option context
    case "addOption":
      const newState = {
        ...state,
        listOption: [...state.listOption, action.payload],
      };
      updateLocalData("Option", [...state.listOption, action.payload]);
      return newState;

    case "updateData":
      const id = Date.now().toString(36);
      updateLocalData(state.option, [
        ...state.data,
        {
          id: id,
          word: action.payload.word,
          meaning: action.payload?.meaning,
          type: action.payload?.type,
          example: action.payload?.example,
          isLearned: false,
        },
      ]);
      return {
        ...state,
        data: [...state.data, { ...action.payload, id: id }],
      };
    case "updateItem":
      const newData = state.data.map((i) => {
        if (i.id == action.payload.id) {
          return action.payload;
        }
        return i;
      });

      updateLocalData(state.option, newData);
      return { ...state, data: newData };
    case "setStatusItem":
      const newStatus = state.data.map((i) => {
        if (i.id == action.payload) {
          console.log({ ...i, status: !i.status });
          return { ...i, status: !i.status };
        }
        return i;
      });

      updateLocalData(state.option, newStatus);
      return { ...state, data: newStatus };
    case "deleteList":
      removeLocalData(state.option);
      return { ...state, data: [] };
    case "deleteItem":
      const newList = state.data.filter((i) => i.id !== action.payload);
      updateLocalData(state.option, newList);
      return { ...state, data: newList };
    default:
      throw new Error("Unknow action");
  }
}
function BodyContent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //get data on mounted
  useEffect(() => {
    dispatch({ type: "setOption", payload: state.listOption[0] });
  }, []);

  useEffect(() => {
    document.title = state.option || "DND Note";
    return () => (document.title = "DND Note");
  }, [state]);

  return (
    <>
      <Option list={state.listOption} dispatch={dispatch} />
      <span>
        <Input state={state} handleAddNote={dispatch} />
        <button onClick={() => dispatch({ type: "deleteList" })}>
          Delele all note
        </button>
      </span>
      <h2>{state.option}</h2>
      <ListCard state={state} handleItem={dispatch} />
    </>
  );
}
export default BodyContent;
