
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            const res = await axiosInstance.post(
                "/auth/login",
                credentials
            );
            return res.data.data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message ||
                error.message ||
                "Login failed. Please try again."
            );
        }
    }
);

export const currentLoggedInEmployee = createAsyncThunk(
    "auth/me",
    async (_, thunkApi) => {
        try {
            const res = await axiosInstance.get("/auth/me");

            return res.data.user;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message ||
                error.message ||
                "Unable to fetch logged-in employee."
            );
        }
    }
);
