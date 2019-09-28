import React from 'react';
import { withApollo } from '../apollo/withApollo';
import SummariesList from '../components/SummariesList';

const IndexPage = () => <SummariesList />;

export default withApollo(IndexPage);
