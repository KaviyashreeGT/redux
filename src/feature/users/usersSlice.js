import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {id:'0',name:'kaviya'},
    {id:'1',name:'shree'},
    {id:'2',name:'kavya'}
]
const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{}
})
export const selectAllUsers=(state)=>state.users;
export default usersSlice.reducer