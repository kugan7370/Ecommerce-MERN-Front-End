import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    current_user: null,
    error: false
}

const UserSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        user_login_request: (state) => {
            state.loading = true;
            state.current_user = null;
            state.error = false;
        },
        user_login_Success: (state, actions) => {
            state.loading = false;
            state.current_user = actions.payload;
            state.error = false;
        },
        user_login_Failed: (state) => {
            state.loading = false;
            state.current_user = null;
            state.error = true;

        }, user_logout: (state) => {
            state.loading = false;
            state.current_user = null;
            state.error = null;
        },
        user_addbasket: (state, actions) => {
            state.current_user.user.product_id.includes(actions.payload) ? state.current_user.user.product_id = [...state.current_user.user.product_id] : state.current_user.user.product_id.push(actions.payload)

        },
        user_multi_addbasket: (state, actions) => {
            state.current_user.user.product_id.push(actions.payload)

        },
        user_getbasket: (state) => {
            state.current_user.user.product_id = [...state.current_user.user.product_id]

        },
        user_removebasket: (state, actions) => {
            state.current_user.user.product_id = [...state.current_user.user.product_id.filter((id) => id != actions.payload)]

        },


    }
});

export const { user_login_request, user_login_Success, user_login_Failed, user_logout, user_addbasket, user_getbasket, user_removebasket, user_multi_addbasket } = UserSlicer.actions

export default UserSlicer.reducer