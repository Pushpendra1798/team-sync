import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedInEmployee, loginEmployee } from "./authAction";

let authSlice = createSlice({
    name: "auth",
    initialState: {
        employee: null,
        isLoading: false,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employee = action.payload;
            state.isLoading = false;
        },
        removeEmployee: (state) => {
            state.employee = null;
            state.isLoading = false;
        },
    },
    extraReducers: (builder)=> {
        builder
        .addCase(loginEmployee.pending, (state)=> {
            state.isLoading = true;
        })

        .addCase(loginEmployee.fulfilled, (state, action)=>{
            state.employee = action.payload;
            state.isLoading = false;
        })

        .addCase(loginEmployee.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(currentLoggedInEmployee.pending, (state)=> {
            state.isLoading = true;
        })

        .addCase(currentLoggedInEmployee.fulfilled, (state, action)=>{
            state.employee = action.payload;
            state.isLoading = false;
        })

        .addCase(currentLoggedInEmployee.rejected, (state, action) => {
            state.isLoading = false;
            state.employee = null;
            state.error = action.payload || action.error.message;
        });
    }
})

export let {addEmployee, removeEmployee} = authSlice.actions;

export default authSlice.reducer;