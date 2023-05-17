import { combineReducers } from "redux";

const INITIAL_STATE = {
  todo: [],
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, todo: [...state.todo, action.payload] };
    case "DELETE_DATA":
      return { ...state, todo: state.todo.slice(0, state.todo.length - 1) };
    default:
      return state;
  }
};

const reducers = combineReducers({
  data: dataReducer,
});

export default reducers;
