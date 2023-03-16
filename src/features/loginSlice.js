import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
	name:'login',
	initialState: {connected:false, users:[{name:'ryad', email:'test', mdp:'pass'}], connectedUser:{} },
	reducers : {
		setConected:(state, action)=>{state.connected = action.payload},
        setUser:(state, action)=>{state.connectedUser = action.payload},
	}
})

export const { setConected, setUser } = loginSlice.actions
export default loginSlice.reducer