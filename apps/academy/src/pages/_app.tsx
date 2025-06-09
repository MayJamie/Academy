/** @format */

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { context } from 'shared-client';
import 'shared-client/src/types/mui.types';
import '../styles/globals.css';
import AppLayout from '@@components/layout/AppLayout';

const { NextAppRootProvider } = context;

/* eslint-disable no-console -- log initiation of app */
console.log('Academy app loaded!');

export default function App({ Component, pageProps, ...rest }: AppProps) {
    return (
        <NextAppRootProvider
            Component={Component}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- temp
            LayoutComponent={AppLayout}
            description='Find out more about our online lessons platform'
            title="Academy | I'deffect"
            {...rest}
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
             -- allow any for Next.js pageProps */
            pageProps={pageProps}
        >
            <Script
                src='https://www.googletagmanager.com/gtag/js?id=G-D44DQW2951'
                strategy='lazyOnload'
            />
            {/* <Script src='../scripts/index.js' strategy='lazyOnload' /> */}
            <Analytics />
        </NextAppRootProvider>
    );
}
