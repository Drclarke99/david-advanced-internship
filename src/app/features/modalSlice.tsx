import { createSlice } from '@reduxjs/toolkit'
import modal from '../../../components/modal';

export interface modalState {
    status: boolean,
    modal: {}
}

const initialState: modalState = {
    status: false,
    modal: {}
}

export const modalSlice = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.status = true;
            state.modal = {modal}
        },
        closeModal: (state) => {
            state.status = false;
            state.modal = {}
        }
    },
})

// export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
export const {openModal, closeModal} = modalSlice.actions;