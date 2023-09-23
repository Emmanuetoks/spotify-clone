import {
  PlayListsArray,
  TPlayList,
  TReducerAction,
} from "../../types/playlist";

export function LibraryReducer(state: PlayListsArray, action: TReducerAction) {
  let stateUpdate = state ? [...state] :[];
  switch (action.type) {
    case "set":
      stateUpdate = action.payload as any;
      break;
    case "add":
      stateUpdate.unshift(action.payload);
      break;

    case "update":
      stateUpdate = stateUpdate.map((el) =>
        el.id === action.payload.id ? { ...el, ...action.payload } : el
      );
      break;
    case "delete":
      stateUpdate = stateUpdate.filter((el) => el.id !== action.payload.id);
      break;
    default:
      break;
  }
  return stateUpdate;
}
