/** @format */

import type { ComponentProps } from 'react';
import { ui } from 'shared-client';

const { LinkButton } = ui;

const RegisterButton = ({ sx, ...restProps }: ComponentProps<typeof LinkButton>) => {
    return (
        <LinkButton
            {...restProps}
            sx={{ mx: 'auto', my: '50px', display: 'flex', width: 'max-content', ...sx }}
        >
            Register Now
        </LinkButton>
    );
};

export default RegisterButton;
