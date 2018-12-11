import React            from 'react';
import styled           from 'styled-components';

import { Doughnut }     from 'react-chartjs-2';

export default( props ) => {

    return(
        <PIE onClick={() => console.log(props)}>
            <div className="pie-title">
                {props.title}
            </div>
            <Doughnut data={props.data} />
        </PIE>
    )
};

const PIE = styled.div`
    margin: 2.5vh;
    height: 36vh;
    background-color: #FFF;
    box-shadow: 0 1px 3px rgba(0,0,0,.55);

    &> .pie-title{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3vh;
        padding: 2vh 0;
    }
`