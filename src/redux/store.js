import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/RootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistReduce = persistReducer(persistConfig, rootReducers);

export default () => {
  const store = legacy_createStore(persistReduce, applyMiddleware(thunk))
  const persistor = persistStore(store);

  return {
    store,
    persistor
  }
}