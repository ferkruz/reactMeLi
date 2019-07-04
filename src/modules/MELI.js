import axios from 'axios';
const url = "https://api.mercadolibre.com/sites/MLA/search?q=ps4";

export const getResults = (q)=> axios.get(url);
