import {createStore} from 'redux';
import userReducer from './reducers/user.reducer';
const store = createStore(userReducer);
export {store};
