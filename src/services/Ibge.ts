import { IbgeProps } from '../types';
import api from './api';

class Ibge {
    async get(name:any): Promise<IbgeProps> {
        const { data } = await api(name).get('');
        return data;
    }

}

export default new Ibge();