/** @format */

export const CAREERSIGHT_URL_MAP = {
    development: 'http://localhost:3001',
    preview: 'https://careersight.vercel.app/',
    production: 'https://careersight.vercel.app/',
    // TODO: fix DNS issues
    // production: 'https://careersight.ideffect.com/',
} as const;

export const EFFECTECH_URL_MAP = {
    development: 'http://localhost:3002',
    preview: 'https://effectechconference.vercel.app/',
    production: 'https://www.effectechconference.com/',
    // TODO: fix DNS issues
    // production: 'https://effectech.ideffect.com/',
} as const;

export const APP_ANCHOR_TAG = {
    BOTTOM: 'bottom',
    CONTACT: 'contact',
    TOP: 'top',
} as const;

export const EXTERNAL_URL = {
    FACEBOOK: 'https://www.facebook.com/ideffect?mibextid=ZbWKwL',
    LINKEDIN: 'https://www.linkedin.com/company/ideffect/',
    YOUTUBE:  'https://youtube.com/@ideffect-l5w?si=v1CoxaUtrYrs5Y-i',
} as const;
