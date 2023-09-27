import {
  PlayListsArray,
  TPlayList,
  TReducerAction,
} from "../../types/playlist";

export function LibraryReducer(state: PlayListsArray, action: TReducerAction) {
  let stateUpdate = state ? [...state] : [];
  switch (action.type) {
    case "set":
      stateUpdate = action.payload as TPlayList[];
      break;
    case "add":
      stateUpdate.unshift(action.payload as TPlayList);
      break;

    case "update":
      stateUpdate = stateUpdate.map((el) => {
        const pholder = action.payload as TPlayList;

        return el.id === pholder.id ? { ...el, ...action.payload } : el
      }
      );
      break;
    case "delete":
      stateUpdate = stateUpdate.filter((el) => {
        const pholder = action.payload as TPlayList;
        el.id !== pholder.id;
      });
      break;
    default:
      break;
  }
  return stateUpdate;
}
