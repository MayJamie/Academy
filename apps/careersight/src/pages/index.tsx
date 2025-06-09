/** @format */

import Head from 'next/head';
import type { ReactElement } from 'react';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import AppLayout from '../client/components/layout/AppLayout';
import DiscoverSection from '../client/components/pages/home/DiscoverSection';
import EventsSection from '../client/components/pages/home/EventsSection';
import IntroSection from '../client/components/pages/home/IntroSection';
import MarqueeSection from '../client/components/pages/home/MarqueeSection';
import TargetUsersSection from '../client/components/pages/home/TargetUsersSection';

const HomePage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Careersight | I&apos;deffect | Home Page</title>
                <meta
                    content='Find out more about our E-Learning and career advice services'
                    name='description'
                />
            </Head>
            <IntroSection />
            <MarqueeSection />
            <DiscoverSection />
            <TargetUsersSection />
            <EventsSection />
        </>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout hasTransparentHeader>{page}</AppLayout>;
};

export default HomePage;
