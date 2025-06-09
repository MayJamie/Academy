/** @format */

import type { ComponentProps } from 'react';
import { layout } from 'shared-client';
import type { TPropsWithChildrenDefault } from 'shared-types';

const { DefaultHeader, DefaultFooter, DefaultLayout } = layout;

const links = [
    { href: '/', children: 'Home' },
    { href: '/about', children: 'About' },
    { href: '/careersight', children: 'Careersight' },
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
