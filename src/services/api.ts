import axios from 'axios';

const api = (name:any) => {
    return axios.create({
        baseURL: `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`,
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
    

export default api;