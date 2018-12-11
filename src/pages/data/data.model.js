import api from '../../api';
import moment from 'moment';

const Model = function () {

    const getData = async() =>{
        let update = await api.analysis.getDataPage(),
            data = await api.analysis.getData('data'),
            result = {... this.state };

        result.startData= data.start;
        result.endData = data.end;
        result.discountData = data.discount;
        result.timerange = data.time;
        result.loading = false;
        return this.setState( result );
    };

    return { getData };
};

export default Model;
