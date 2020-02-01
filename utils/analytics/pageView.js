import ReactGA from 'react-ga';

export default () => {
	ReactGA.pageview(window.location.pathname + window.location.search);
};
