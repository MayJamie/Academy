/** @format */

import type { ComponentProps } from 'react';
import { Button } from '..';
import AppLink from './AppLink';

const LinkButton = ({ children, ...restProps }: ComponentProps<typeof Button>) => {
    return (
        <Button LinkComponent={AppLink} variant='contained' {...restProps}>
            {children}
        </Button>
    );
};

export default LinkButton;
