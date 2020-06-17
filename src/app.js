import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense} from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(addExpense({ description: 'Water bill', amount: 500, createdAt: 500 } ))
store.dispatch(addExpense({ description: 'Gas bill', amount: 2500, createdAt: 1500 } ))
store.dispatch(setTextFilter('water'))




ReactDOM.render(<AppRouter /> , document.getElementById('app'))