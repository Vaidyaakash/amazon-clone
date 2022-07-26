import { createContext, useContext, useReducer } from 'react'

export const Data = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
    <Data.Provider value={useReducer(reducer, initialState)} >
        {children}
    </Data.Provider>
);

export const useStateValue = () => useContext(Data);