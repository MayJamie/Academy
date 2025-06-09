/** @format */

import { CONSTANT } from 'shared-lib';

/* eslint-disable turbo/no-undeclared-env-vars -- allow */
const { EFFECTECH_URL_MAP } = CONSTANT;

const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV;

export const EFFECTECH_URL = (process.env.NEXT_PUBLIC_EFFECTECH_URL ||
    EFFECTECH_URL_MAP[ENV] ||
    'https://effectechconference.vercel.app/') as string;
