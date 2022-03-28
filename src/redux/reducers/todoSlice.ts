import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  todos: ITasks[];
  project: IProject[];
}
export interface ITasks {
  id?: string;
  title: string;
  details: string;
  date: string;
  priority: string;
}
interface IProject {
  title: string;
  tasks: ITasks[];
}
// Define the initial state using that type
const initialState: CounterState = {
  todos: [],
  project: [],
};

export const todoSlice = createSlice({
  name: "Projects",
  initialState,
  reducers: {
    createTask: (state = initialState, action) => {
      state.todos.push(action.payload);
    },
    createProject: (state = initialState, action) => {
      state.project.push(action.payload);
    },
  },
});

export const { createTask, createProject } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default todoSlice.reducer;
