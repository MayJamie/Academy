/** @format */

import { PropsWithChildren } from 'react';

type TPropsWithChildren = Pick<PropsWithChildren, 'children'>;

export type TPropsDefault<Type = unknown> = TPropsWithChildren & {
    className?: string;
} & Type;

export type TPropsWithChildrenDefault<Type = unknown> = Required<TPropsWithChildren> &
    TPropsDefault<Type> &
    Type;
