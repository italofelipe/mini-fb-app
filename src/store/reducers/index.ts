import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  mainReducer,
});

function mainReducer(state: any, action: any) {
  switch (action.type) {
    case "HELLO":
      return state;
    default:
      return { ...state, hello: "world" };
  }
}
