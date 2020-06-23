import React from 'react';
import { css } from 'emotion';
import Loader from './assets/loading.gif';

const wrapperLoading = css`
    display: flex;
    justify-content: center;
    align-content: center;
`;
const LoadingPage = () => {
    return (
        <div className={wrapperLoading}>
            <img src={Loader} alt="Loading..."/>
        </div>
    )
}

export default LoadingPage;