import bagActionsTypes from "./action-Types";

const initialState = {
    bag: []
}

const bagReducer = (state = initialState, action) => {
    if(action.type === bagActionsTypes.ADD) {
        console.log(state)
        return { ...state, bag: [...state.bag, action.payload.produto]};
    }

    return state;
}

export default bagReducer;