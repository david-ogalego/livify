import React, { useEffect } from 'react';
import { withApollo } from '../apollo/withApollo';
import SummariesList from '../components/SummariesList';
import Header from '../components/Header/Header';
import { PageView } from '../utils/analytics/pageView';

const IndexPage = () => {
    useEffect(() => {
        PageView();
    });
    return (
        <>
            <Header />
            <SummariesList />
        </>
    );
};

export default withApollo(IndexPage);
