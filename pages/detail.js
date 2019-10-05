import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import Summary from '../components/Summary';
import { withApollo } from '../apollo/withApollo';

const Detail = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log('Detail', id);

    return (
        <>
            <Header />
            <Summary id={id} />
        </>
    );
};

export default withApollo(Detail);
