import App from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
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
                `}</style>
            </>
        );
    }
}
