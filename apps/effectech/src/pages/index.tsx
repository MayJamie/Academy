/** @format */

import Head from 'next/head';
import type { ReactElement } from 'react';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import AppLayout from '../client/components/layout/AppLayout';
import CareerSection from '../client/components/pages/home/CareerSection';
import EventsSection from '../client/components/pages/home/EventsSection';
import IntroSection from '../client/components/pages/home/IntroSection';

const HomePage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Effectech | I&apos;deffect | Home Page</title>
                <meta
                    content='Find out more about our E-Learning and career advice events and webinars'
                    name='description'
                />
            </Head>
            <IntroSection />
            <EventsSection />
            <CareerSection />
        </>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout hasTransparentHeader>{page}</AppLayout>;
};

export default HomePage;
