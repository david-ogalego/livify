import React, { Component } from 'react';
import { withApollo } from '../apollo/withApollo';
import SummariesList from '../components/SummariesList';
import Header from '../components/Header/Header';
import initGA from '../utils/analytics/initGA';
import { PageView } from '../utils/analytics/pageView';

class IndexPage extends Component {
    componentDidMount() {
        initGA();
        PageView();
    }
    render() {
        return (
            <>
                <Header />
                <SummariesList />
            </>
        );
    }
}

export default withApollo(IndexPage);
