import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
// import testReducer from "../../features/sandbox/testReducer";

export function configureStore() {
  return createStore(rootReducer, devToolsEnhancer());
}
