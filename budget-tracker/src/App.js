import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddExpenseForm from './components/AddExpenseForm'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import ExpenseList from './components/ExpenseList'
const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <Header />
        <h3 className="mt-3">Expenses</h3>
        <ExpenseList />
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>

      </div>
    </AppProvider>
  )
}
export default App