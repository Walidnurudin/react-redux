import { createStore } from 'redux';

// STATE  
const initialeState = {
  value: 0,
}

// REDUCER
const rootReducer = (state = initialeState, action) => {
  switch (action.type) {
    case 'PLUS_VALUE':
      return {
        ...state,
        value: state.value + 1,
      }
    case 'MINUS_VALUE':
      if (state.value > 0) {
        return {
          ...state,
          value: state.value - 1,
        }
      }
      return {
        ...state,
        value: state.value,
      }
    default:
      return state;
  }
}

// STORE
export const store = createStore(rootReducer);