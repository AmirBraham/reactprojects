import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext'
const ExpenseItem = props => {
    const { dispatch } = useContext(AppContext)
    return <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <div>
            <span>
                {props.cost}

            </span>
            <TiDelete onClick={() => dispatch({
                type: "DELETE_EXPENSE",
                payload: props.id
            })} size="1.5rem" />
        </div>
    </li>
}

export default ExpenseItem