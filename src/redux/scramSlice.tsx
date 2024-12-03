import { createSlice} from '@reduxjs/toolkit'

const scramSlice = createSlice({
    name:'scramStates',
    initialState:{
        sstate:{
            signUpState: true
        }
    },
    reducers:{
        setSignUp:(state, action)=>{
            state.sstate.signUpState = action.payload
        }
    }
})

export const {setSignUp} = scramSlice.actions;
export default scramSlice.reducer;