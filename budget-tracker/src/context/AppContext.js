import { createContext, useReducer } from 'react'
const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":

            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case "DELETE_EXPENSE":
            const id = action.payload
            const newStateExpenses = state.expenses.filter(expense => expense.id !== id)
            return {
                ...state,
                expenses: newStateExpenses
            }
        default:
            return state
    }
}
const initialState = {
    budget: 2000,
    expenses: [{
        id: 12, name: "shopping", cost: 50
    }]
}

export const AppContext = createContext()
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return <AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
    }}>
        {props.children}
    </AppContext.Provider>
}


