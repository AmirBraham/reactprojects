import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const ExpenseTotal = (props) => {
    const { expenses } = useContext(AppContext)
    const spent = expenses.reduce((total, item) => total += parseInt(item.cost), 0)

    return (
        <div className="alert alert-primary">
            <span>Spent so far : {spent}</span>
        </div>
    )
}
export default ExpenseTotal