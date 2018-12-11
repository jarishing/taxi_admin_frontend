import api from '../../api';

const Model = function () {

    const getOrderList = async( orderType ) => {
        let result = { ... this.state };
        let data = await api.orderList.getOrderList( orderType );

        result.orderList = data;
        result.listType = orderType;
        return this.setState( result );
    }
    return { getOrderList };
};

export default Model;