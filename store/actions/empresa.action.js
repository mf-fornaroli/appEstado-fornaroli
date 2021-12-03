export const SELECT_EMPRESA = 'SELECT_EMPRESA';
export const ADD_EMPRESA = 'ADD_EMPRESA';
export const EDIT_EMPRESA = 'EDIT_EMPRESA';
export const REMOVE_EMPRESA = 'REMOVE_EMPRESA';

//seleccionar una empresa
export const selectEmpresa = (id) => ({
 type: SELECT_EMPRESA,
 idEmpresa: id
});

//agregar una empresa a la lista de empresas
export const addEmpresa = (empresa) => ({
 type: ADD_EMPRESA,
 empresa: empresa
});

