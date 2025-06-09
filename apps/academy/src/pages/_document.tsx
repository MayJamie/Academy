/** @format */

// pages/_document.tsx
import type { AppType } from 'next/app';
import type { DocumentContext, DocumentProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { ComponentProps, ComponentType } from 'react';
import { config } from 'shared-client';
import type { TAppPropsWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import AppLayout from '@@components/layout/AppLayout';

const { createEmotionCache, createEmotionServer } = config;

interface MyDocumentProps extends DocumentProps {
    emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
    return (
        <Html lang='en'>
            <Head>
                <link href='/favicon.ico' rel='shortcut icon' />

                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900" rel="stylesheet">
                </link>

                {/* Insertion point for client. This connects with createEmotionCache.ts */}
                <meta content='' name='emotion-insertion-point' />
                {emotionStyleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    // eslint-disable-next-line @typescript-eslint/unbound-method -- required
    const { extractCriticalToChunks } = createEmotionServer(cache);

    // We're passing `emotionCache` to App component
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (
                App: ComponentType<ComponentProps<AppType> & TAppPropsWithLayout>,
            ) =>
                function EnhanceApp(props) {
                    return (
                        <App
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- temp
                            LayoutComponent={AppLayout}
                            description='Find out more about our E-Learning and Career Advisor services'
                            emotionCache={cache}
                            title="Academy | I'deffect"
                            {...props}
                        />
                    );
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            dangerouslySetInnerHTML={{ __html: style.css }}
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
        />
    ));

    return {
        ...initialProps,
        // return emotionStyleTags as props
        emotionStyleTags,
    };
};
