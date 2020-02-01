import React, { useEffect } from 'react';
import { withApollo } from '../apollo/withApollo';
// import SummariesList from '../components/SummariesList';
import Header from '../components/Header/Header';
import { PageView } from '../utils/analytics/pageView';
import LiveList from '../components/LiveList/LiveList';

const IndexPage = () => {
	useEffect(() => {
		PageView();
	});
	return (
		<>
			<Header />
			{/* <SummariesList /> */}
			<LiveList />
		</>
	);
};

export default withApollo(IndexPage);
