import React            from 'react';
import styled           from 'styled-components';

import Header           from '../../components/header/header';
import Item             from '../../components/item/item';

import { Icon, Badge }         from 'antd';


export default( props ) => {
    console.log( props);
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Header/>
            <DetailPage>
                <div className="detail-page-title-row">
                    <div className="detail-page-title">
                        司機資料
                    </div>
                </div>
                <div className="detail-page-main-row">
                    {
                        props.UserData?
                        <div className="detail-page-main">
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    名稱:
                                </div>
                                <div className="detail-page-data">
                                    { props.UserData.username }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    電話號碼:
                                </div>
                                <div className="detail-page-data">
                                    { props.UserData.telephone_no }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    車牌號碼:
                                </div>
                                <div className="detail-page-data">
                                    { props.UserData.vehicle_reg_no }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    的士編號:
                                </div>
                                <div className="detail-page-data">
                                    { props.UserData.taxi_driver_id_no }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    評價:
                                </div>
                                <div className="detail-page-data">
                                    { props.UserData.grade }({ props.UserData.mark })
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-data-title">
                                    狀態:
                                </div>
                                <div className="detail-page-data">
                                    {
                                        props.UserData.valid?
                                        <Badge status="processing" text="正常"/>:
                                        <Badge status="error" text="禁止中" />
                                    }
                                </div>
                            </div>
                            <div className="detail-page-data-item">
                                <div className="detail-page-button-wrapper">
                                    {
                                        props.UserData.valid?
                                        <div className="detail-page-ban-button" onClick={() => props.banUser(props.userId)}>
                                            <Icon type="stop" /> 禁止
                                        </div>:
                                        <div className="detail-page-release-button" onClick={() => props.unbanUser(props.userId)}>
                                            <Icon type="check" /> 解除
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>:
                        <div className="detail-page-main-empty">
                            <Icon type="loading" />
                        </div>
                    }
                </div>
                <div className="detail-page-title-middle-row">
                    <div className="detail-page-title">
                        訂單紀錄
                    </div>
                </div>
                {
                    !props.UserOrder?
                    <div className="detail-page-order-comntainer-empty">
                        <Icon type="loading" />
                    </div>:
                    props.UserOrder.length == 0?
                    <div className="detail-page-order-comntainer-empty">
                        此用戶暫時未有訂單
                    </div>:
                    <div className="detail-page-order-comntainer">
                        {
                            props.UserOrder.map((item, index) => (
                                <Item 
                                    type="Order"
                                    key={index}
                                    orderId={ item._id }
                                    status={ item.status }
                                    start={ item.start.address }
                                    end={ item.end.address }
                                    cost={ item.criteria.cost }
                                    taxiType={ item.criteria.taxiType }
                                    passenger={ item.criteria.passenger }
                                />
                            ))
                        }
                    </div>
                }
                <div className="detail-page-title-middle-row">
                    <div className="detail-page-title">
                        評價紀錄
                    </div>
                </div>
                {
                    !props.UserComment?
                    <div className="detail-page-order-comntainer-empty">
                        <Icon type="loading" />
                    </div>:
                    props.UserComment.length == 0?
                    <div className="detail-page-order-comntainer-empty">
                        此用戶暫時未有評價
                    </div>:
                    <div className="detail-page-order-comntainer">
                        {
                            props.UserComment.map(( item, index ) => (
                                <Item
                                    type="Comment"
                                    key={index}
                                    orderId={item.orderId}
                                    comment={item.comment}
                                    commentBy={item.orderBy}
                                    clickable={true}
                                />
                            ))
                        }
                    </div>
                }
            </DetailPage>
        </div>
    )
};


const DetailPage = styled.div`
    position: absolute;
    top: 8.5vh;
    background-color: #F1F1F1;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;

    &> .detail-page-main-row{
        margin: 2.5vh;
        height: 37vh;
        background-color: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,.55);

        &> .detail-page-main-empty{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 6vh;
        }

        &> .detail-page-main{
            padding: 2vh;
            width: 100%;
            height: 100%;

            &> .detail-page-data-item{
                display: flex;
                font-size: 2.5vh;
                padding-bottom: 0.8vh;
                
                &> .detail-page-data-title{
                    margin-right: 2vw;
                    color: black;
                }

                &> .detail-page-data{
                    color: gray;
                    display: flex;
                    align-items: center;

                    &> span{
                        &> .ant-badge-status-dot{
                            width: 1vh;
                            height: 1vh;
                        }
        
                        &> .ant-badge-status-text{
                            font-size: 2.5vh;
                            margin-left: 1.3vh;
                        }
                    }
                }

                &> .detail-page-button-wrapper{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;

                    &> .detail-page-ban-button{
                        padding: 1vh 1.5vh 1vh 1vh;
                        font-size: 2.5vh;
                        border: 1px solid crimson;
                        color: crimson;
                    }

                    &> .detail-page-release-button{
                        padding: 1vh 1.5vh 1vh 1vh;
                        font-size: 2.5vh;
                        border: 1px solid seagreen;
                        color: seagreen;
                    }
                }
            }
        }
    }

    &> .detail-page-title-row{
        padding: 2.5vh 2.5vh 0 2.5vh;
        display: flex;
        align-items: center;

        &> .detail-page-title{
            font-size: 3.5vh;
        }
    }

    &> .detail-page-readmore{
        margin: 2.5vh;
        display: flex;
        justify-content: flex-end;
    }

    &> .detail-page-title-middle-row{
        padding:0 2.5vh;
        display: flex;
        align-items: center;

        &> .detail-page-title{
            font-size: 3.5vh;
        }
    }

    &> .detail-page-order-comntainer-empty{
        height: 65vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3vh;
    }

    &> .detail-page-order-comntainer{
        height: 65vh;
        overflow: scroll;
    }

`