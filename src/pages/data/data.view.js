import React            from 'react';
import styled           from 'styled-components';

import Header           from '../../components/header/header';
import Item             from '../../components/item/item';
import Pie              from '../../components/chart/chart.pie/pie';

import { Icon, Select }         from 'antd';


export default( props ) => {
    console.log(props);
    // console.log(props.startData.startData);
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Header/>
            <MainPage>
                {
                   props.loading? 
                   <div className="pie-loading">
                        loading...
                    </div>:
                   <div>
                        <Pie 
                            title="最受歡迎起始點"
                            pieData={props.startData.startData} 
                            pieLabel={props.startData.startLabel}
                        />
                        <Pie 
                            title="最受歡迎目的地"
                            pieData={props.endData.endData} 
                            pieLabel={props.endData.endLabel}
                        />
                        <Pie 
                            title="乘客折扣"
                            pieData={props.discountData.discountData} 
                            pieLabel={props.discountData.discountLabel}
                        />
                        <Pie 
                            title="最受歡迎訂單時間"
                            pieData={props.timerange.timeData} 
                            pieLabel={props.timerange.timeLabel}
                        />
                    </div>
                }
            </MainPage>
        </div>
    )
};

const MainPage = styled.div`
    position: absolute;
    top: 8.5vh;
    background-color: #F1F1F1;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
`