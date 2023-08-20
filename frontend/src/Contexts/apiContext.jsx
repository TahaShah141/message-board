import { createContext, useEffect, useReducer } from "react";

export const APIContext = createContext()

export const apiReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return { messages : action.payload, ...state}
        case 'NEW_MESSAGE':
            return { messages: [action.payload, ...messages], ...state}
        case 'DELETE_MESSAGE':
            return {message: messages.filter(msg => msg._id !== action.payload._id), ...state}
        case 'EDIT_MESSAGE':
            return {messages: 
                messages.map((msg) => {
                    if (msg._id === action.payload._id)
                        return action.payload
                    else return msg
                    }),
                ...state
            }
        case 'USERNAME':
            return { username: action.payload, ...state }
        
        default:
            return state
    }
}

export const APIContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(apiReducer, {
        messages: [],
        username: null
    })

    // useEffect(() => {
    //     dispatch({type: 'LOGIN', payload: localStorage.getItem('user')})
    // }, [])

    return (
        <APIContext.Provider value={{ ...state, dispatch }}>
            { children }
        </APIContext.Provider>
    )
}
