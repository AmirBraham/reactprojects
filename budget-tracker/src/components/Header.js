import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Budget from './Budget'
import Remaining from './Remaining'
import ExpenseTotal from './ExpenseTotal'
const Header = (props) => {
    const { budget } = useContext(AppContext)

    return <div>
        <h1 className='mt-3'>Budget Planner</h1>
        <div className="row mt-3">
            <div className="col-sm">
                <Budget />
            </div>
            <div className="col-sm" >
                <Remaining />
            </div>
            <div className="col-sm" >
                <ExpenseTotal />
            </div>

        </div>
    </div>
}

export default Header