/** @format */

import clsx from 'clsx';
import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import type { LinkProps as MuiLinkProps } from '..';
import { Link as MuiLink, styled } from '..';

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({});

interface NextLinkComposedProps
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
        Omit<
            NextLinkProps,
            'href' | 'as' | 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'
        > {
    to: NextLinkProps['href'];
    linkAs?: NextLinkProps['as'];
}

export const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
    function NextLinkComposed(props, ref) {
        const {
            to,
            linkAs,
            replace,
            scroll,
            shallow,
            prefetch,
            legacyBehavior = true,
            locale,
            ...other
        } = props;

        return (
            <NextLink
                as={linkAs}
                href={to}
                legacyBehavior={legacyBehavior}
                locale={locale}
                passHref
                prefetch={prefetch}
                replace={replace}
                scroll={scroll}
                shallow={shallow}
            >
                <Anchor ref={ref} {...other} />
            </NextLink>
        );
    },
);

export type LinkProps = {
    activeClassName?: string;
    as?: NextLinkProps['as'];
    href: NextLinkProps['href'];
    linkAs?: NextLinkProps['as']; // Useful when the as prop is shallow by styled().
    noLinkStyle?: boolean;
    isExternal?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
    Omit<MuiLinkProps, 'href'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/pages/api-reference/components/link
const AppLink = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
    const {
        activeClassName = 'active',
        as,
        className: classNameProp,
        href,
        legacyBehavior,
        linkAs: linkAsProp,
        locale,
        noLinkStyle,
        prefetch,
        replace,
        scroll,
        shallow,
        /* 
            eslint-disable-next-line no-unused-vars,
            @typescript-eslint/no-unused-vars -- links don't have roles 
        */
        role,
        isExternal = false,
        ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProp, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });

    const isExternalLink =
        typeof href === 'string' && (isExternal || !href.startsWith('/'));

    if (isExternalLink) {
        const externalLinkProps = {
            className,
            href,
            ref,
            target: '_blank',
            referrerPolicy: 'no-referrer',
            rel: 'noopener noreferrer',
            ...other,
        } as const;
        if (noLinkStyle) {
            return <Anchor {...externalLinkProps} />;
        }

        return <MuiLink {...externalLinkProps} />;
    }

    const linkAs = linkAsProp || as;
    const nextJsProps = {
        to: href,
        linkAs,
        replace,
        scroll,
        shallow,
        prefetch,
        legacyBehavior,
        locale,
    };

    const internalLinkProps = { className, ref, ...nextJsProps, ...other } as const;
    if (noLinkStyle) {
        return <NextLinkComposed {...internalLinkProps} />;
    }

    return <MuiLink {...internalLinkProps} component={NextLinkComposed} />;
});

export default AppLink;
