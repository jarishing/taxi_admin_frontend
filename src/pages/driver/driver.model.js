import api from '../../api';

const Model = function () {

    const getDriverList = async( searchType ) => {
        let result = { ... this.state },
            userType = 'driver';

        if( searchType == "nonVaild" || searchType == "banned" )
            userType = '';
            
        let data = await api.userList.getUserList( userType, searchType );
        
        result.driverList = data;
        result.listType = searchType;
        return this.setState( result );
    };

    return { getDriverList };
};

export default Model;
