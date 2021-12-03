import  EMPRESAS   from '../../data/Empresas';
import { ADD_EMPRESA, SELECT_EMPRESA } from '../actions/empresa.action';

const initialState = {
    listaEmpresas: EMPRESAS,
    selected: null
};

const EmpresasReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case ADD_EMPRESA:
            const empresa = action.empresa;
            return {
                ...state,
                listaEmpresas: [
                    ...state.listaEmpresas,
                    empresa
                ]
            }
        case SELECT_EMPRESA:
            const IndexEmpresa = state.listaEmpresas.findIndex(empresa => empresa.idEmpresa === action.idEmpresa);

            if (IndexEmpresa === -1) return state

            return {...state, selected: state.empresas.listaEmpresas[IndexEmpresa]}
        default:
            return state
    }
    //return state;
};

export default EmpresasReducer;