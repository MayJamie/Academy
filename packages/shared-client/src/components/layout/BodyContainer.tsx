/** @format */

import type { TPropsWithChildrenDefault } from 'shared-types';
import { Container } from '..';

const BodyContainer = ({ children }: TPropsWithChildrenDefault) => {
    return <Container maxWidth='xl'>{children}</Container>;
};

export default BodyContainer;
