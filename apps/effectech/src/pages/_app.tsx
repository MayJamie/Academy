/** @format */

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { context } from 'shared-client';
import 'shared-client/src/types/mui.types';
import AppLayout from '../client/components/layout/AppLayout';
import '../styles/globals.css';

const { NextAppRootProvider } = context;

/* eslint-disable no-console -- log initiation of app */
console.log('Effectech app loaded!');

export default function App({ Component, pageProps, ...rest }: AppProps) {
    return (
        <NextAppRootProvider
            Component={Component}
            LayoutComponent={AppLayout}
            description='Find out more about our E-learning and career advice events and webinars'
            title="Effectech | I'deffect"
            {...rest}
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
             -- allow any for Next.js pageProps */
            pageProps={pageProps}
        >
            <Script
                src='https://www.googletagmanager.com/gtag/js?id=G-9ZLLTTNJDL'
                strategy='lazyOnload'
            />
            <Script src='../scripts/index.js' strategy='lazyOnload' />
            <Analytics />
        </NextAppRootProvider>
    );
}
