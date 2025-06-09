/** @format */

import type { ComponentProps } from 'react';
import { layout } from 'shared-client';
import type { TPropsWithChildrenDefault } from 'shared-types';

const { DefaultHeader, DefaultFooter, DefaultLayout } = layout;

export const REGISTRATION_URL = 'https://forms.gle/tXmCPJj6Sc2hnaPJ7';

const links = [
    { href: '/', children: 'Home' },
    { href: '/register', children: 'Register'},
    {href: '/courses', children: 'Courses'},
    { href: '/tutors', children: 'Tutors'},
    // { href: REGISTRATION_URL, children: 'Registration' },
    // { href: 'https://classroom.google.com', children: 'Head to Class' },
    { href: '/mindelv-gpt', children: 'MindelvGPT'},
    { href: '/news', children: 'News'},
    { href: '/about-us', children: 'About Us'},
    { href: '/contact-us', children: 'Contact Us'},
];

type TAppHeader = ComponentProps<typeof DefaultHeader>;
type TAppFooter = ComponentProps<typeof DefaultFooter>;
interface IAppLayout {
    hasTransparentHeader?: boolean;
}

const AppHeader = (props: TAppHeader) => {
    return <DefaultHeader {...props} links={links} />;
};

const AppFooter = (props: TAppFooter) => {
    return <DefaultFooter {...props} links={links} />;
};

const AppLayout = ({
    children,
    hasTransparentHeader = false,
}: TPropsWithChildrenDefault<IAppLayout>) => {
    return (
        <DefaultLayout
            FooterComponent={AppFooter}
            HeaderComponent={AppHeader}
            headerProps={{ isTransparentAtTop: hasTransparentHeader }}
        >
            {children}
        </DefaultLayout>
    );
};

export default AppLayout;