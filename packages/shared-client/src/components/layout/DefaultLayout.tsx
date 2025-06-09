/** @format */

import type { ElementType } from 'react';
import { CONSTANT } from 'shared-lib';
import type { TPropsWithChildrenDefault } from 'shared-types';
import { Box } from '..';
import ScrollTopButton from './ScrollTopButton';
import type { IHeaderProps } from './layout.types';

const { STYLE_HEIGHT_HEADER } = CONSTANT;

interface IProps {
    HeaderComponent: ElementType;
    FooterComponent: ElementType;
    headerProps?: Partial<IHeaderProps>;
}

const DefaultLayout = ({
    children,
    FooterComponent,
    HeaderComponent,
    headerProps,
}: TPropsWithChildrenDefault<IProps>) => {
    return (
        <>
            <HeaderComponent {...headerProps} />
            <ScrollTopButton />
            <Box
                component='main'
                sx={{
                    mt: STYLE_HEIGHT_HEADER,
                }}
            >
                {children}
            </Box>
            <FooterComponent />
        </>
    );
};

export default DefaultLayout;
