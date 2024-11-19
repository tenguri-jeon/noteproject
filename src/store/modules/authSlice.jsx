import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataList : [{
        id : 1 ,
        username : '홍길동' ,
        tel : '010-0000-1111',
        email : 'abc@naver.com',
        password : 'a1234',
        },
    ],
    // 로그인 여부
    authed : false ,
    user : null,
};
let no = initialState.dataList.length + 1;
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login (state, action) { 
            const {email , password} = action.payload
            const newItem = state.dataList.find((item) => item.email === email)
            if (newItem.password === password) {
                state.authed = true;
                state.user= newItem
            }
        },
        logout (state, action) {
            state.authed = false;
            state.user = null;
        },
        signup (state, action) {
            state.dataList.push({ id:no++ , ...action.payload })
        },
    },
});

export const { login , logout , signup } = authSlice.actions;
export default authSlice.reducer;