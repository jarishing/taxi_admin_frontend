import axios from 'axios';
import { baseUrl } from '../../constant/base';

export const setLoginInfo = ( user, token ) => ({ type: 'LOGIN', payload: { user, token } });

export function login ( username, password ){
    return async function( dispatch, getState ){
        const body = {email: username, password: password};
        let info = await axios.post(`${baseUrl}/user/login`, body );
        info = info.data;
        return dispatch(setLoginInfo( info.user.username, info.access_token));
    }   
}