import { createStore } from "redux";
import countrReducer from "./Services/reducers/counterReducer";


const store = createStore(countrReducer);

export default store