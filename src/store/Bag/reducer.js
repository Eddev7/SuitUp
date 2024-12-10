import bagActionsTypes from "./action-Types";

const initialState = {
    bag: []
}

const bagReducer = (state = initialState, action) => {
    if(action.type === bagActionsTypes.ADD) {
        return { ...state, bag: [...state.bag, action.payload.produto]};
    }
    if(action.type == bagActionsTypes.REMOVE) {
        const indexProd = action.payload.index;
        const newbag = state.bag.filter((produto, index) => {
            if(index != indexProd) return produto;
        });
        return { ...state, bag: [...newbag]};
    }

    return state;
}

export default bagReducer;