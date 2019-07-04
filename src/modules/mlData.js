import Axios from 'axios';
const url = 'https://api.mercadolibre.com/sites/MLA/search?q='


const find = (searchText)=>{
    return new Promise ((resolve, reject)=>{
        Axios.get(url+searchText)
            .then( result => resolve(result.data.results) )
            .catch( err => reject  )
        })
}

export default {find};
