import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

export function makeStore() {
  return configureStore({
    reducer: {},
  });
}

const store = makeStore();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
