import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/RootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import {persistReducer, persistStore} from "redux-persist";

const persistConfig: any = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistReduce: any = persistReducer(persistConfig, rootReducers);
export type RootState = ReturnType<typeof rootReducers>;

export default () => {
  const store = createStore(persistReduce, applyMiddleware(thunk))
  const persistor = persistStore(store);

  return {
    store,
    persistor
  }
}