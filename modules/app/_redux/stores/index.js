import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ShopApp from '../reducers/index';

const store =createStore(ShopApp,applyMiddleware(thunk));
export default store;