import { createContext, useEffect, useReducer } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";

export const APIContext = createContext()

export const apiReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return {...state, messages : action.payload}
        case 'NEW_MESSAGE':
            return {...state, messages: [action.payload, ...(state.messages)]}
        case 'DELETE_MESSAGE':
            return {...state, messages: state.messages.filter(msg => msg._id !== action.payload._id)}
        case 'EDIT_MESSAGE':
            return {...state,
                messages: state.messages.map((msg) => {
                    if (msg._id === action.payload._id)
                        return {...msg, ...action.payload}
                    else return msg
                    })
            }
        case 'SET_USERNAME':
            return {...state, username: action.payload}
        
        default:
            return state
    }
}

export const APIContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(apiReducer, {
        messages: [],
        username: null
    })

    // console.log(state)

    return (
        <APIContext.Provider value={{ ...state, dispatch }}>
            { children }
        </APIContext.Provider>
    )
}
