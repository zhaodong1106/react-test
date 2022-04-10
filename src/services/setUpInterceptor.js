import instance from './index'
import { message } from 'antd';
import {logout} from "../store/CountReducer";

const setUpInterceptor = (store) => {


    instance.interceptors.request.use(
        async (config) => {
            /* your logic here */
            config = {
                ...config,
                // withCredentials: true,
                // baseURL: process.env.REACT_APP_API_URL,
                headers:{
                    token:store.getState().token.value
                }
            };
            return config
        }
    )

    instance.interceptors.response.use(response => {
            response = {
                ...response,
            };
            return response;
            // const originalRequest = response.config;
            // const {code, o, msg} = response.data;
            // if (code == "200") {
            //     return Promise.resolve(o);
            // } else if (code == "401") {
            //     message.error(msg);
            //     store.dispatch(logout()); // 使用dispatch
            //     return Promise.reject();
            // }
        },
        function (error) {
            const status = error.response.status;
            if (status === 401) {
                store.dispatch(logout()); // 使用dispatch
            }
            return Promise.reject(error);
        },)
}

export default setUpInterceptor