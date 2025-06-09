/** @format */

import type { ComponentPropsWithRef } from 'react';
import type { AppLink } from '../ui';

export type TAppLink = ComponentPropsWithRef<typeof AppLink>;

export interface IHeaderProps {
    isTransparentAtTop?: boolean;
    links: TAppLink[];
}
