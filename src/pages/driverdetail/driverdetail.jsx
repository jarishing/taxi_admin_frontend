import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './driverdetail.view';
import Model from './driverdetail.model';

class DriverDetail1 extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.model = Model.bind(this)();
    }

    componentDidMount(){
        this.model.getData( this.props.userId );
    }

    render(){
        return(
            <View 
                { ... this.props } 
                { ... this.state }
                { ... this.model }
            />
        )
    }

}

const mapStateToProps = ( state, ownProps ) => ({
    userId : state.searchReducer.userId
    // userId: "5bfd4b948f5e8a4097681f8d"
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    
});

export default connect( mapStateToProps, mapDispatchToProps )(DriverDetail1);