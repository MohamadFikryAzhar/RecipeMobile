import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/RootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import {persistReducer, persistStore} from "redux-persist";
import {createLogger} from 'redux-logger';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistReduce = persistReducer(persistConfig, rootReducers);

const logger = createLogger({})

export default () => {
  const store = legacy_createStore(persistReduce, applyMiddleware(logger, thunk))
  const persistor = persistStore(store);

  return {
    store,
    persistor
  }
}