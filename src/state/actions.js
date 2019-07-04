import { SET_ITEMS, SET_QUERY } from './types';
import mlData from '../modules/mlData';

//Action Creator: funcion que devuelve un objeto "action"
export const setItems = (items=[])=>{
  return{
    type: SET_ITEMS,
    payload: items
  }
}

export const setQuery = (query="")=>{
  return{
    type: SET_QUERY,
    payload: query
  }
}

//Esta funcion es capturada por Thunk, se ejecuta y luego llama a una action creator
export const getResultsItems = (q) => dispatch => {
  mlData.find(q).then(results=>{
    dispatch(setItems(results));
  })
}
