import api from '../../api';

const Model = function () {

    const getUserList = async( searchType ) =>{
        let result = { ... this.state };
        let data = await api.userList.getUserList( 'user', searchType );
        
        result.userList = data;
        result.listType = searchType;
        return this.setState( result );
    }


    return { getUserList };
};

export default Model;
