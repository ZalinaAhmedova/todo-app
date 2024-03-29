import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    todos: [],
    count: 0,
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        ADD_TODO: (state, action) => {
            const todo = {
                id: v4(),
                text: action.payload,
            };
            state.todos.push(todo);
            state.count+= 1;
        },
        REMOVE_TODO: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count-= 1;
        },
        REMOVE_ALL_TODO: (state) => {
            state.todos = [];
            state.count = 0;
        }
    },
})

export const { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO } = todoSlice.actions
export default todoSlice.reducer;