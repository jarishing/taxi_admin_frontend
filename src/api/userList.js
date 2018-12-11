import axios from 'axios';
import { baseUrl } from '../constant/base';
import { getAccessToken } from '../store';

export const getUserList = async ( userType, searchType ) => {
    let AccessToken =  getAccessToken();
    
    let { data: result } = await axios.get(
        `${baseUrl}/user/?user=${userType}&type=${searchType}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
}