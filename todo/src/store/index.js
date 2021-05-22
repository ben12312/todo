import { createStore } from 'redux';
import toDoReducer from './reducer';

let store = createStore(toDoReducer);

export default store