// 导入axios
import writerPro from '@/configs/writerpro';
import axios from 'axios';

export interface IRequestResult<T> {
    code?: number;
    msg?: string;
    data: T;
    status: number;
}

// 基地址
const service = axios.create({
    baseURL: '',
    timeout: 30000,
});

// 请求拦截
service.interceptors.request.use(
    (config) => {
        config.headers['tenantCode'] = writerPro.tenantCode;
        config.headers['Referrer-Policy'] = 'no-referrer';

        const writerUser = localStorage.getItem('writer_user')
        if(writerUser === null){
            return config;
        }
        const obj = JSON.parse(writerUser);
        config.headers.token = obj.token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// 响应拦截
service.interceptors.response.use(
    async (res) => {
        // 凭证验失败
        // console.log('----拦截响应数据 是否加密', import.meta.env.VITE_RESPONSE_DATA_CIPHERED)
        // console.log('VITE_RESPONSE_DATA_CIPHERED = ', typeof import.meta.env.VITE_RESPONSE_DATA_CIPHERED)
        // console.log('----拦截响应数据', res.data)
        // 解密
        // if (import.meta.env.VITE_RESPONSE_DATA_CIPHERED === 'true') {
        
        
        // }
        if (res.data.code === 10003) {
            localStorage.clear();
        }
        return res.data;
    },
    // 响应错误的代码写这里
    (error) => {
        return Promise.reject(error);
    }
);

export const sendPost = async <T>(url: string, data?: unknown): Promise<IRequestResult<T>> => {
    const response: IRequestResult<T> = await service({ method: 'post', url, data });
    return response;
};
export const sendGet = async <T>(url: string, params?: unknown): Promise<IRequestResult<T>> => {
    const response: IRequestResult<T> = await service({ method: 'get', url, params });
    return response;
};

