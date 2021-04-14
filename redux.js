// CONTOH KECIL ALUR REDUX

const redux = require('redux')
const createStore = redux.createStore;

// STATE
const initialeState = {
    value: 0,
    age: 20,
}

// REDUCER
const rootReducer = (state = initialeState, action) => {
    switch(action.type){
        case 'ADD_AGE':
        return {
            ...state,
            age: state.age++,
        }
        case 'CHANGE_VALUE':
        return {
            ...state,
            value: state.value + action.newValue,
        }
        default:
            return state;
    }
}

// STORE
const store = createStore(rootReducer);
console.log(store.getState())

// SUBCRIPTION
store.subscribe(() => {
    console.log('store change', store.getState());
})

// DISPATCHING ACTION
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 12});
console.log(store.getState());