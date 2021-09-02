import React, { useReducer } from 'react';

const SET_TABLEDATA = 'SET_TABLEDATA';
const SET_TURN = 'SET_TURN';
const SET_RESULT = 'SET_RESULT';

const initialState = {
  tableData: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ],
  turn: 'o',
  result: '',
}

const reducer = (state, action) => {
  switch (action.type){
    case SET_TABLEDATA:
      return {
        ...state,
        tableData: state.turn
      }
    case SET_TURN:
      return {
        ...state,
        turn: 'o' ? 'x' : 'o'
      }
    case SET_RESULT:
      return {
        ...state,
        result: action.result
      }
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

    </div>
  );
}

export default App;
