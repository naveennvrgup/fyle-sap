import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import NavbarReducer from "./components/Navbar/reducer";
import BranchListReducer from "./components/BranchList/reducer";
import FavouritesReducer from "./components/Favorites/reducer";
import BranchDetailReducer from "./components/BranchDetail/reducer";

const reducers = {
  navbar: NavbarReducer,
  branchList: BranchListReducer,
  favourites: FavouritesReducer,
  branchDetail: BranchDetailReducer,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel1,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
