/** @format */

import Head from 'next/head';
import type { ReactElement } from 'react';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import AppLayout from '@@components/layout/AppLayout';
import LessonsRegisterSection from '@@components/LessonsRegisterSection';
import HeroSection from '@@components/HeroSection';
import CollaborationSection from '@@components/CollaborationSection';
import TestimonialSection from '@@components/TestimonialSection';
import AnalyticsSection from '@@components/AnalyticsSection';
import CoursesSection from '@@components/CoursesSection';
import TutorCards from '@@components/TutorCards';
import WhatsNewSection from '@@components/WhatsNewSection';
import AdSection from '@@components/AdSection';

const HomePage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Academy | I&apos;deffect | Home Page</title>
                <meta
                    content='Find out more about online lessons platform'
                    name='description'
                />
            </Head>
            <HeroSection />
            <CollaborationSection/>
            <AdSection />
            {/*<WhatsNewSection/>*/}
            <AnalyticsSection/>
            <CoursesSection/>
            <TutorCards/>
            <TestimonialSection/>
            <LessonsRegisterSection/>
        </>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default HomePage;