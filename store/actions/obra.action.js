export const SELECT_OBRA = 'SELECT_OBRA';
export const ADD_OBRA = 'ADD_OBRA';
export const EDIT_OBRA = 'EDIT_OBRA';
export const REMOVE_OBRA = 'REMOVE_OBRA';

//seleccionar una obra
export const selectObra = (id) => ({
 type: SELECT_OBRA,
 idObra: id
});

//agregar una obra a la lista de obras
export const addObra = (obra) => ({
 type: ADD_OBRA,
 obra: obra
});