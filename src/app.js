import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense} from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();


store.dispatch(addExpense({ description: 'Water bill', amount: 500, createdAt: 500 } ))
store.dispatch(addExpense({ description: 'Gas bill', amount: 2500, createdAt: 9000 } ))
store.dispatch(addExpense({ description: 'Electricity bill', amount: 9000, createdAt: 1500 } ))
store.dispatch(setTextFilter('water'))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app'))