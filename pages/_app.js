import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import initGA from '../utils/analytics/initGA';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount() {
        initGA();
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Livify - Your soccer highlights</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <meta
                        name="description"
                        content="In Livify you can find the latest highlights of your favorite soccer team"
                    />
                    <link rel="canonical" href="https://livify.es/" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <Component {...pageProps} />
                <style global jsx>{`
                    body {
                        color: rgba(0, 0, 0, 0.87);
                        margin: 0;
                        font-size: 0.875rem;
                        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                        font-weight: 400;
                        line-height: 1.43;
                        letter-spacing: 0.01071em;
                        background-color: #fafafa;
                    }
                    ul {
                        list-style-type: none;
                        padding: 0;
                    }

                    button {
                        border: none;
                        margin: 0;
                        padding: 0;
                        width: auto;
                        overflow: visible;

                        background: transparent;

                        color: inherit;
                        font: inherit;

                        line-height: normal;
                        outline: none;
                    }
                `}</style>
            </>
        );
    }
}
