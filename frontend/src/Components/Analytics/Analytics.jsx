import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import ChartGroup from './ChartGroup';

function Analytics() {
    return (
        <AnalyticsStyled>
            <InnerLayout>
                <h1>Analytics</h1>
                <ChartGroup />
            </InnerLayout>
        </AnalyticsStyled>
    );
}

const AnalyticsStyled = styled.div`
    h1 {
        margin-bottom: 2rem;
        text-align: center;
    }
`;

export default Analytics;
