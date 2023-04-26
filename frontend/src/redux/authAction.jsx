import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("add/user", async (userdata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/user/register", userdata)
        localStorage.setItem("login", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        console.log(error)
    }
}
)

export const userLoginAction = createAsyncThunk("login/user", async (logindata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/user/login", logindata)
        localStorage.setItem("login", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        console.log(error)
    }
}
)

export const getAllUsers = createAsyncThunk("get/users", async (userdata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/user")
        return data.result
    } catch (error) {
        console.log(error)
    }
}
)


