import { createStore, combineReducers } from 'redux'

const demoState = {
    expenses: [{
        id: 'eokdaj',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}