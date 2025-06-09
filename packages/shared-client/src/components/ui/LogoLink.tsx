/** @format */

import type { SxProps } from '@mui/material';
import type { ComponentProps } from 'react';
import { CONSTANT } from 'shared-lib';
import AppLink from './AppLink';
import Image from './Image';

const { STYLE_HEIGHT_HEADER } = CONSTANT;

interface ILogoLink {
    linkSx?: SxProps;
    imageSx?: SxProps;
    imageProps?: Partial<ComponentProps<typeof Image>>;
}

const LogoLink = ({ linkSx, imageSx, imageProps }: ILogoLink) => {
    return (
        <AppLink
            href='/'
            sx={{
                display: 'block',
                position: 'relative',
                height: `calc(${STYLE_HEIGHT_HEADER} * 0.8)`,
                width: '120px',
                ...linkSx,
            }}
        >
            <Image
                alt='logo-link'
                fill
                src='/images/logos/logo.png'
                sx={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    ...imageSx,
                }}
                {...imageProps}
            />
        </AppLink>
    );
};

export default LogoLink;
