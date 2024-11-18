import writerPro from '@/configs/writerpro';
import { sendGet, sendPost, IRequestResult } from './request';

const ENV =
    process.env.NODE_ENV === 'production'
        ? writerPro.productionDomain
        : writerPro.developmentDomain;


/**
 * 登录
 */
export const apiLogin = async <T>(params: any): Promise<IRequestResult<T>> => {
    return sendPost<T>(`${ENV}/user/v1/login`, params);
};

/**
 * register
 */
export const apiRegister = async <T>(params: any): Promise<IRequestResult<T>> => {
    return sendPost<T>(`${ENV}/user/v1/register`, params);
};