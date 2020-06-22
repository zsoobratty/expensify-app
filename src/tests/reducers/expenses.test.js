import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'fake_id'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add a expense', () => {
    const expense = {
        id: '4',
        description: 'BBQ',
        note: '',
        amount: 5400,
        createdAt: 9001   
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const description = 'NotGum'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toEqual(description)
})

test('should not edit expense if not found', () => {
    const description = 'Chewing Gum'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})