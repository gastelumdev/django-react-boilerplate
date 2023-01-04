import { DELETE_LEAD, GET_LEADS, ADD_LEAD, EDIT_LEAD, GET_LEAD } from '../actions/types.js';

const initialState = {
    leads: [],
    lead: null,
    edit: false,
    showForm: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload,
                edit: false
            }
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload),
                edit: false
            }
        case ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, action.payload],
                edit: false,
                showForm: false
            };
        case EDIT_LEAD:
            const index = state.leads.findIndex(lead => {
                return lead.id === action.payload.id;
            });

            if (index !== -1) {
                state.leads[index] = action.payload;
            }
            return {
                ...state,
                leads: [...state.leads],
                edit: false
            };
        case GET_LEAD:
            return {
                ...state,
                lead: action.payload,
                edit: true
            }

        default:
            return state;
    }
}