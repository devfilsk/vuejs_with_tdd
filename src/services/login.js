import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { getLocalToken } from '../store/storage';


// o adapter permite o axios trabalhar com o nock
const instance = axios.create({
    baseURL: 'https://validacao.api.validacao.appfacilita.com/api/v1',
    adapter: httpAdapter,
    auth: {
        email: 'admin@goscore.com.br',
        password: '6f2a3s2t'
    },
    headers: {
        'goscore-token': '22a3803365a55b197a3b43bc64aacc11',
        'goscore-token-user': getLocalToken
    },
});

export default instance; 