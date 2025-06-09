/** @format */

import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import type { NextPage } from 'next';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import type {
    ComponentProps,
    CSSProperties,
    ElementType,
    ReactElement,
    ReactNode,
} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { TPropsDefault } from 'shared-types';
import createEmotionCache from '../../config/create-emotion-cache';
import DefaultCssBaseline from '../layout/DefaultCssBaseline';
import DefaultHead from '../layout/DefaultHead';
import PageProvider from './PageProvider';

export type TNextPageWithLayout = NextPage & {
    getLayout?: (_page: ReactElement) => ReactNode;
};
interface IProps extends AppProps {
    emotionCache?: EmotionCache;
}
export type TAppPropsWithLayout = IProps &
    ComponentProps<typeof DefaultHead> & {
        LayoutComponent: ElementType;
        Component: TNextPageWithLayout;
    };

const errorBoundaryStyle: CSSProperties = {
    height: '100vh',
    width: '100%',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const NextAppRootProvider = ({
    Component,
    description,
    pageProps,
    LayoutComponent,
    title,
    children,
}: TPropsDefault<TAppPropsWithLayout>) => {
    // Use the layout defined at the page level, if available
    const getLayout =
        Component.getLayout ?? ((page) => <LayoutComponent>{page}</LayoutComponent>);

    return (
        <ErrorBoundary
            fallback={<div style={errorBoundaryStyle}>Sorry, something went wrong!</div>}
        >
            <NextThemeProvider
                attribute='class'
                defaultTheme='light'
                disableTransitionOnChange
                enableSystem
                themes={['light', 'dark']}
            >
                <CacheProvider value={clientSideEmotionCache}>
                    <PageProvider>
                        <>
                            <DefaultHead description={description} title={title} />
                            <DefaultCssBaseline />
                            {getLayout(<Component {...pageProps} />)}
                            {children}
                        </>
                    </PageProvider>
                </CacheProvider>
            </NextThemeProvider>
        </ErrorBoundary>
    );
};

export default NextAppRootProvider;
