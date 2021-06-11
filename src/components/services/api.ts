import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api'
})


// É necessário fazer uma chamada HTTP, método GET, 
// para a URL: https://www.mercadobitcoin.net/api/<coin>/<method>/