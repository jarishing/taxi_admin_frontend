import api from '../../api';

const Model = function () {

    const getDriverList = async( searchType ) => {
        let result = { ... this.state };
        let data = await api.userList.getUserList( 'driver', searchType );
        
        result.driverList = data;
        result.listType = searchType;
        return this.setState( result );
    };

    return { getDriverList };
};

export default Model;
