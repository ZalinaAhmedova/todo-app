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
        addTodo: (state, action) => {
            const todo = {
                id: v4(),
                text: action.payload,
            };
            state.todos.push(todo);
            state.count+= 1;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count-= 1;
        },
        removeAllTodo: (state) => {
            state.todos = [];
            state.count = 0;
        }
    },
})

export const { addTodo, removeTodo, removeAllTodo } = todoSlice.actions
export default todoSlice.reducer;