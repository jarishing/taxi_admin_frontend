import axios from 'axios';
import { baseUrl } from '../constant/base';
import { getAccessToken } from '../store';

export const getUser = async( userId ) => {
    let AccessToken =  getAccessToken();

    let { data: result } = await axios.get(
        `${baseUrl}/user/${userId}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );
    
    return result.data;
};

export const getUserOrder = async( userId ) => {
    let AccessToken =  getAccessToken();

    let { data: result } = await axios.get(
        `${baseUrl}/user/order/${userId}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );
    
    return result.data;
};

export const getUserCommemt = async( userId ) => {
    let AccessToken =  getAccessToken();

    let { data: result } = await axios.get(
        `${baseUrl}/user/comment/${userId}`,
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );
    
    return result.data;
};

export const banUser = async( userId ) => {
    let AccessToken =  getAccessToken();
    
    let{ data: result } = await axios.put(
        `${baseUrl}/user/ban/${userId}`,{},
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
};

export const unbanUser = async( userId ) => {
    let AccessToken =  getAccessToken();

    let{ data: result } = await axios.put(
        `${baseUrl}/user/ban/release/${userId}`,{},
        {headers: {Authorization: `Bearer ${AccessToken}`}}
    );

    return result.data;
};