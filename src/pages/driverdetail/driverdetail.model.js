import api from '../../api';

import { imageUrl }      from '../../constant/base';

const Model = function () {

    const getData = async( userId ) =>{
        if(!userId){
            let url = new URL(window.location.href);
            userId = url.searchParams.get("driverId"); 
        }
        
        let UserData = api.user.getUser( userId ),
            UserOrder = api.user.getUserOrder( userId ),
            UserComment = api.user.getUserCommemt( userId ),
            result = { ... this.state };

        [ UserData, UserOrder, UserComment ] = await Promise.all([ UserData, UserOrder, UserComment ]);

        result.UserData = UserData;
        result.UserOrder = UserOrder;
        result.UserComment = UserComment;

        return this.setState( result );
    };

    const banUser = async( userId ) => {
        let UserData = await api.user.banUser( userId ),
            result = { ... this.state };

        result.UserData = UserData;
        return this.setState( result );
    }

    const unbanUser = async( userId ) => {
        let UserData = await api.user.unbanUser( userId ),
            result = { ... this.state };

        result.UserData = UserData;
        return this.setState( result );
    }

    const openImage = async( link ) => {
        window.open(`${imageUrl}/image/${link}`);
    }

    const setDriverClass = async ( value ) => {
        let UserData = await api.user.setDriverClass( this.props.userId, value ),
            result = { ... this.state };

        result.UserData = UserData;
        return this.setState( result );
    }

    const vaildDriver = async () => {
        let UserData = await api.user.vaildDriver( this.props.userId ),
            result = { ... this.state };

        result.UserData = UserData;
        return this.setState( result );
    }

    const troggleConfirmModel = async() => {
        let result = { ... this.state };

        result.visible = !result.visible;
        return this.setState( result );
    }

    const delteDriverAccount = async( ) => {
        await api.user.deleteDriverAccount( this.props.userId );
        return this.props.history.push('/Driver');
    }

    return { getData, banUser, unbanUser, openImage, setDriverClass, vaildDriver, troggleConfirmModel, delteDriverAccount };
};

export default Model;
