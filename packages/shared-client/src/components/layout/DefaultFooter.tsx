/** @format */

import { CONTACT_INFO } from 'shared-lib/constants/app';
import { EXTERNAL_URL } from 'shared-lib/constants/routes/url';
import type { TPropsWithChildrenDefault } from 'shared-types';
import { Box, Divider, Grid, List, ListItem, ListSubheader, Stack, Typography } from '..';
import { AppLink } from '../ui';
import LogoLink from '../ui/LogoLink';
import SocialMediaList from '../ui/SocialMediaList';
import BodyContainer from './BodyContainer';
import type { TAppLink } from './layout.types';

interface IFooterProps {
    links: TAppLink[];
}
type TLinkProps = Pick<IFooterProps, 'links'>;

const FooterLink = ({ children, href, ...other }: TAppLink) => {
    return (
        <Typography component={ListItem}>
            <AppLink
                href={href}
                sx={{
                    textDecoration: 'none',
                    color: (theme) => theme.palette.text.primary,
                    '&:hover, &:focus': {
                        transition: 'all 0.3s ease-in-out',
                        textDecoration: 'underline',
                    },
                }}
                {...other}
            >
                {children}
            </AppLink>
        </Typography>
    );
};

const FooterLinks = ({ links = [] }: TLinkProps) => {
    return (
        <>
            {links.map((link) => {
                const { children, href } = link;
                const key = typeof href === 'string' ? href : href.pathname;

                return (
                    <FooterLink href={href} key={key}>
                        {children}
                    </FooterLink>
                );
            })}
        </>
    );
};

const StackList = ({ children }: TPropsWithChildrenDefault) => {
    return (
        <Stack
            component='ul'
            direction='column'
            sx={{
                flexItems: 'center',
                width: 'max-content',
                mx: { xs: 0, sm: 'auto' },
                pl: 0,
            }}
        >
            {children}
        </Stack>
    );
};

const DefaultFooter = ({ links }: IFooterProps) => {
    const footerLinkGroup: { links: typeof links; heading: string }[] = [
        { links, heading: "I'deffect" },
        {
            links: [
                { href: EXTERNAL_URL.FACEBOOK, children: 'Facebook',},
                { href: EXTERNAL_URL.LINKEDIN, children: 'LinkedIn' },
                { href: EXTERNAL_URL.YOUTUBE, children: 'YouTube'},
            ],
            heading: 'Social Media',
        },
        
        {
            links: [
                {
                    href: CONTACT_INFO.MOBILE,
                    children: 'Phone',
                },
                { href: CONTACT_INFO.EMAIL, children: 'Email' },
            ],
            heading: 'Contact Us',
        },
    ];

    return (
        <Box component='footer'>
            <Box
                sx={{
                    background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url('/images/background/scattered-forcefields-animated-footer-1.svg')`,
                    py: 10,
                }}
            >
                <BodyContainer>
                    <Box sx={{ paddingLeft: { md: 8 } }}>
                        {/* TODO: make this re-usable across both sites */}
                        {/* <Typography
                            color='white.main'
                            gutterBottom
                            sx={{ maxWidth: 'clamp(5ch, 100%, 20ch)', fontSize: '4rem' }}
                            variant='h2'
                        >
                            Ready to get started?
                        </Typography>
                        <Typography
                            color='white.main'
                            gutterBottom
                            sx={{ maxWidth: 'clamp(10ch, 100%, 60ch)' }}
                            variant='subtitle1'
                        >
                            <strong>Edulabs beta</strong> coming soon!
                        </Typography> */}
                    </Box>
                </BodyContainer>
            </Box>
            <Box>
                <BodyContainer>
                    <Grid
                        container
                        spacing={0}
                        sx={{
                            py: 3,
                            justifyContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        {footerLinkGroup.map((footerLinkItem, index) => {
                            const { heading, links: footerLinks } = footerLinkItem;

                            return (
                                /* 
                                    eslint-disable-next-line
                                    react/no-array-index-key -- static 
                                */
                                <Grid item key={index} sm={4} xs={12}>
                                    <List component={StackList}>
                                        <ListSubheader>
                                            <Typography
                                                color='primary.main'
                                                gutterBottom
                                                variant='h3'
                                            >
                                                {heading}
                                                <Divider light />
                                            </Typography>
                                        </ListSubheader>
                                        <FooterLinks links={footerLinks} />
                                    </List>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Divider light variant='fullWidth' />
                    <Grid
                        container
                        sx={{
                            py: 3,
                            textAlign: 'center',
                            justifyContent: 'center',
                            width: 'max-content',
                            mx: 'auto',
                            gap: '32px',
                        }}
                    >
                        <Grid
                            item
                            sx={{
                                height: 'max-content',
                            }}
                            xs={4}
                        >
                            <LogoLink />
                        </Grid>
                        <Divider flexItem light orientation='vertical' />
                        <Grid item xs={4}>
                            <SocialMediaList />
                        </Grid>
                    </Grid>
                    <Typography sx={{ paddingBottom: 3, textAlign: 'center' }}>
                        Copyright © 2022 I&apos;deffect Limited. All rights reserved.
                    </Typography>
                </BodyContainer>
            </Box>
        </Box>
    );
};

export default DefaultFooter;
