const initialState = {
    users:[]
}

const userReducer = (state = initialState, action) =>{
    if(action.type == 'ADD_DATA'){
        return {...state, users:action.payload}
    }

    return state
}

export default userReducer;