import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface Form {
    login?: string;
    password?: string;
    password1?: string;
    user?: string;
    surname?: string;
    birthdate?: string,
    pol?:string,
}
interface TodosState {
    formRegister: Form;
}

export const initialState: TodosState = {
    formRegister: {},
}
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setRegister(state, action) {
            state.formRegister = {...action.payload}
        },
    }
})

export const { setRegister,} = todoSlice.actions;
export default todoSlice.reducer;