import { createStore, combineReducers } from 'redux';

//importo los reducers definidos
import EmpresasReducer from './reducers/empresas.reducer';
import ObrasReducer from './reducers/obras.reducer';

//rootReducer: combina los diferentes reducers
const rootReducer = combineReducers({
    empresas: EmpresasReducer,
    obras: ObrasReducer
});

//store de Redux
const store = createStore(rootReducer);

export default store;