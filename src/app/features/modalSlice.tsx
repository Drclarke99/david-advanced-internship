import { createSlice } from '@reduxjs/toolkit'

export interface modalState {
    status: boolean,
}

const initialState: modalState = {
    status: false,
}

export const modalSlice = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        
    },
})

// export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;