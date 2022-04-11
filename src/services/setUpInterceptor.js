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


}

export default setUpInterceptor
