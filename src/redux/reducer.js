import { createReducer } from "@reduxjs/toolkit"

const registerReducer = createReducer({}, (builder) => {
    builder

        .addCase("getRegisterRequest", (state) => {
            state.loading = true;
        })
        .addCase("getRegisterSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase("getRegisterFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase('clearError', (state) => {
            state.error = null;
        })
        .addCase('clearMessage', (state) => {
            state.message = null;
        })
})

export default registerReducer