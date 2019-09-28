import React from 'react';
import { withApollo } from '../apollo/withApollo';
import SummariesList from '../components/SummariesList';
import Header from '../components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

const IndexPage = () => (
    <>
        <CssBaseline />
        <Header />
        <SummariesList />
    </>
);

export default withApollo(IndexPage);
