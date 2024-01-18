import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
  name: 'auth', // name of slice
  initialState,
  reducers: {
    // when we call setCredential in the client application, it will handle response coming from the backend (kickstarted by the query in the usersApiSlice) which in this case is the user info and store them in the localstorage
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo')
    }
  }
})

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;