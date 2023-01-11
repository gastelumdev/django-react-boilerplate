import { GET_USERS, EDIT_USER } from "../actions/types";

const initialState = {
    users: [],
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case EDIT_USER:
            const index = state.users.findIndex(user => {
                return user.id === action.payload.id;
            });

            if (index !== -1) {
                state.users[index] = action.payload;
            }
            return {
                ...state,
                users: [...state.users]
            }
        default:
            return state;
    }
}