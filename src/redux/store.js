import { createStore } from "redux";
import { reducer, initialStore } from "./reducer";

const store = createStore(reducer, initialStore);

export default store;
