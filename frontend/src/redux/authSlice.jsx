import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, registerUser, userLoginAction } from "./authAction";

const initialData = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : null

const authSlice = createSlice({
    name: "auth",
    initialState: { users: [], login: initialData },
    reducers: {
        LogoutAction(state) {
            localStorage.removeItem("login")
            state.login = null

        }
    },
    extraReducers: builder => {
        builder
            // to add user
            .addCase(registerUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.login = payload
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false
                state.usererror = payload
            })

            // to login
            .addCase(userLoginAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userlogin = {
                    isLogin: true,
                    name: payload.name,
                    email: payload.email,
                }
            })
            .addCase(userLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.usererror = payload
            })


            // to get all users
            .addCase(getAllUsers.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllUsers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(getAllUsers.rejected, (state, { payload }) => {
                state.loading = false
                state.usererror = payload
            })







    }
})

export default authSlice.reducer
export const { LogoutAction } = authSlice.actions