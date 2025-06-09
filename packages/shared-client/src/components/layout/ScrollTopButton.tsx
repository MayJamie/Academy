/** @format */

import type { MouseEvent } from 'react';
import { CONSTANT } from 'shared-lib';
import type { TPropsWithChildrenDefault } from 'shared-types';
import { Box, Fab, Zoom } from '..';
import useScrollTrigger from '../../hooks/useScrollTrigger';
import { IconKeyboardArrowUpIcon } from '../icons';

const { APP_ANCHOR_TAG } = CONSTANT;

const ScrollTop = (props: TPropsWithChildrenDefault) => {
    const { children } = props;
    const trigger = useScrollTrigger();

    /* eslint-disable @typescript-eslint/no-unnecessary-condition -- owner document can be null */
    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector(`#${APP_ANCHOR_TAG.TOP}`);

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        } else if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
        }
    };
    /* eslint-enable @typescript-eslint/no-unnecessary-condition -- re-enable */

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role='presentation'
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 100 }}
            >
                {children}
            </Box>
        </Zoom>
    );
};

const ScrollTopButton = () => {
    return (
        <ScrollTop>
            <Fab
                aria-label='scroll back to top'
                size='small'
                sx={{ color: 'white.main', backgroundColor: 'primary.main' }}
            >
                <IconKeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    );
};

export default ScrollTopButton;
