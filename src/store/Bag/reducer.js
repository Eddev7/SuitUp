import bagActionsTypes from "./action-Types";

const initialState = {
    bag: []
}

const bagReducer = (state = initialState, action) => {
    console.log(state)
    if(action.type === bagActionsTypes.ADD) {
        return { ...state, bag: [...state.bag, action.payload.produto]};
    }

    return state;
}

export default bagReducer;