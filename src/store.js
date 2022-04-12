import { createStore } from 'redux';
import reducer from './reducer';
import { create } from 'lodash';

const store = createStore(reducer);

export default store;