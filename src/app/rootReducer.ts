import { combineReducers } from "@reduxjs/toolkit";
import todos from "features/todoList/todoSlice";

const rootReducer = combineReducers({
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
