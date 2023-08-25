import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

//createStore and applyMiddleware

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

//nonserializable middleware (default with redux)

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
  // middleware: middlewares;
});

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
