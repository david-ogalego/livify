import React from 'react';
import { withApollo } from '../apollo/withApollo';
import SummariesList from '../components/SummariesList';
import Header from '../components/Header/Header';

const IndexPage = () => (
    <>
        <Header />
        <SummariesList />
    </>
);

export default withApollo(IndexPage);
