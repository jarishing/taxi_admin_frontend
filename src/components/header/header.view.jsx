import React            from 'react';
import styled           from 'styled-components';

import { Icon, Drawer }         from 'antd';

export default( props ) => {
    return (
        <Header> 
            <div className="header-menu" onClick={() => props.triggleDrawer()}>
                <Icon type="bars" />
                <div className="header-title" onClick={() => props.onClickMain()}>Taxi</div>
            </div>
            <Drawer
                title="Hi, admin"
                placement="left"
                closable={false}
                onClose={props.triggleDrawer}
                visible={props.visible}
            >
                <p style={{fontSize: '3vh'}} onClick={() => props.onUserClick()}><Icon type="user" style={{marginRight: '10px'}}/>User</p>
                <p style={{fontSize: '3vh'}} onClick={() => props.onDriverClick()}><Icon type="car" style={{marginRight: '10px'}}/>Driver</p>
                <p style={{fontSize: '3vh'}} onClick={() => props.onOrderClick()}><Icon type="solution" style={{marginRight: '10px'}}/>Order</p>
                <p style={{fontSize: '3vh'}} onClick={() => props.onDataClick()}><Icon type="database" style={{marginRight: '10px'}}/>Data</p>
            </Drawer>
        </Header>
    )
};

const Header = styled.div`
    width: 100%;
    height: 8.5vh;
    background-color: cadetblue;

    &> .header-menu{
        display: flex;

        &> .header-title{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-right: 8vh;
            color: #FFF;
            font-size: 3vh;
        }

        &> i{
            &> svg{
                width: 8.5vh;
                height: 8.5vh;
                padding: 0 2vh;
                color: #FFF;
            }
        }
    }


`