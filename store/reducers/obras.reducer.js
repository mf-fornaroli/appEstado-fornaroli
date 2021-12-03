import { OBRAS } from '../../data/Obras';
import { ADD_OBRA } from '../actions/obra.action';

const initialState = {
    listaObras: OBRAS,
    selected: null
};

const ObrasReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_OBRA:
            const obra = action.obra;
            return {
                ...state,
                listaObras: [
                    ...state.listaObras,
                    obra
                ]
            }
        default:
            return state;           
    }
    
};

export default ObrasReducer;
