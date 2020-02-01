import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import Summary from '../components/Summary';
import { withApollo } from '../apollo/withApollo';
import { PageView } from '../utils/analytics/pageView';

const Detail = () => {
	const router = useRouter();
	useEffect(() => {
		PageView();
	});
	const { id } = router.query;

	return (
		<>
			<Header showPrevious />
			<Summary id={id} />
		</>
	);
};

export default withApollo(Detail);
