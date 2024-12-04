import userActionsTypes from "./action-Types";

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    if(action.type === userActionsTypes.LOGIN) {
        return { ...state, user: action.playload.user};
    }

    return state;
}

export default userReducer;