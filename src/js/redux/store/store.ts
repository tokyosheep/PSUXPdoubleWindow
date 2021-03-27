import { combineReducers , createStore } from "redux";

import { profile } from "../reducer/profile";

const rootReducer = combineReducers({
    profile
});

const configStore = () => createStore(rootReducer);

export default configStore;