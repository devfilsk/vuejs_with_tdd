import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

// o adapter permite o axios trabalhar com o nock
const instance = axios.create({
    baseURL: 'https://validacao.api.validacao.appfacilita.com/api/v1',
    adapter: httpAdapter,
    headers: {
        gs_api_token: '22a3803365a55b197a3b43bc64aacc11',
    }
});

export default instance; 