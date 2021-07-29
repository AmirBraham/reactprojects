import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Remaining = (props) => {
    const { expenses, budget } = useContext(AppContext)
    const spent = expenses.reduce((total, item) => total += parseInt(item.cost), 0)
    return (
        <div className="alert alert-success">
            <span>Remaining : {budget - spent}</span>
        </div>
    )
}
export default Remaining