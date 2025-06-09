/** @format */

import { MouseEvent, useEffect, useState } from 'react';
import { CONSTANT } from 'shared-lib';
import {
    AppBar,
    Box,
    IconButton,
    ListItem,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography,
} from '..';
import useScrollTrigger from '../../hooks/useScrollTrigger';
import { MenuIcon } from '../icons';
import { AppLink } from '../ui';
import LogoLink from '../ui/LogoLink';
import BodyContainer from './BodyContainer';
import type { IHeaderProps, TAppLink } from './layout.types';

import LoginButton from '../ui/LoginButton';

const { STYLE_HEIGHT_HEADER } = CONSTANT;

type TNavProps = Pick<IHeaderProps, 'links'>;
type TMobileNavProps = TNavProps & {
    anchorEl: HTMLElement | null;
    handleOpenMenu: (_event: MouseEvent<HTMLElement>) => void;
    handleCloseMenu: () => void;
};

const HeaderLink = ({ children, href, ...other }: TAppLink) => {
    return (
        <Typography component={ListItem}>
            <AppLink
                href={href}
                sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    whiteSpace: 'nowrap',
                    '&:hover, &:focus': {
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

const HeaderLinks = ({ links = [] }: TNavProps) => {
    return (
        <>
            {links.map((link) => {
                const { children, href, ...restProps } = link;
                const key = typeof href === 'string' ? href : href.pathname;

                return (
                    <HeaderLink href={href} key={key} {...restProps}>
                        {children}
                    </HeaderLink>
                );
            })}
        </>
    );
};

const Nav = ({ links }: TNavProps) => {
    return (
        <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex'}}}>
            <Stack component='ul' direction='row' sx={{ my: { md: 0, paddingLeft: '20px' } }}>
                <HeaderLinks links={links} />
            </Stack>
        </Toolbar>
    );
};

const MobileNav = ({
    links,
    anchorEl,
    handleOpenMenu,
    handleCloseMenu,
}: TMobileNavProps) => {
    const ID = 'menu-app-bar';

    return (
        <Toolbar
            sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'space-between',
            }}
        >
            <IconButton
                aria-controls={ID}
                aria-haspopup='true'
                aria-label='account of current user'
                color='inherit'
                onClick={handleOpenMenu}
                size='large'
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                id={ID}
                keepMounted
                onClose={handleCloseMenu}
                open={Boolean(anchorEl)}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    width: '100%',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem
                    component='ul'
                    onClick={handleCloseMenu}
                    sx={{ flexDirection: 'column', width: '100%' }}
                >
                    <HeaderLinks links={links} />
                    <Box sx={{ mt: 2, textAlign: 'center', width: '100%' }}>

                        {/* Login Button in Nav */}
                        <LoginButton
                            href="https://classroom.google.com"
                            children="Login"
                            sx={{
                                width: '100%',
                                padding: '4px 12px',
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                justifyContent: 'center',
                                textAlign: 'center',
                                backgroundColor: 'transparent',
                                borderColor: '#6A0DAD',
                                borderRadius: '50px',
                                color: '#6A0DAD',
                                textTransform: 'none',
                                border: '2px solid #6A0DAD',
                                '&:hover': {
                                    backgroundColor: '#6A0DAD',
                                    color: '#FFFFFF',
                                },
                            }}
                        />

                    </Box>
                </MenuItem>
            </Menu>
        </Toolbar>
    );
};

const DefaultHeader = ({ isTransparentAtTop, links }: IHeaderProps) => {
    const trigger = useScrollTrigger();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [headerBgColor, setHeaderBgColor] = useState('');
    const [headerBoxShadow, setHeaderBoxShadow] = useState('');
    const [linkColor, setLinkColor] = useState('');

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    useEffect(() => {
        if (trigger) {
            setHeaderBgColor('background.default');
            setHeaderBoxShadow(
                '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            );
            setLinkColor('black.main');
        } else if (isTransparentAtTop) {
            setHeaderBgColor('transparent');
            setHeaderBoxShadow('none');
            setLinkColor('white.main');
        } else {
            setHeaderBgColor('background.default');
            setHeaderBoxShadow('none');
            setLinkColor('black.main');
        }
    }, [trigger, isTransparentAtTop]);

    return (
        <AppBar
            position='fixed'
            sx={{
                transition: 'none',
                height: STYLE_HEIGHT_HEADER,
                backgroundColor: headerBgColor,
                boxShadow: headerBoxShadow,
                color: linkColor,
            }}
        >
            <BodyContainer>
                <Toolbar
                    component='nav'
                    disableGutters
                    sx={{
                        px: { xs: 0 },
                        justifyContent: { xs: 'space-between', md: 'flex-start'},
                        color: 'inherit',
                    }}
                >
                    <Box
                        sx={{
                            ...(isTransparentAtTop && !trigger
                                ? {}
                                : { filter: 'invert(1)' }),
                        }}
                    >
                        <LogoLink imageProps={{ src: '/images/logos/logo-white.png' }} />
                    </Box>
                    <Nav links={links} />

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            marginLeft: 'auto',
                        }}
                    >
                        {/* Login Button */}
                        <LoginButton
                            href="https://classroom.google.com"
                            children="Login"
                            sx={{
                                padding: '4px 18px',
                                fontSize: '1.4rem',
                                fontWeight: 600,
                                backgroundColor: 'transparent',
                                borderRadius: '50px',
                                border: '2px solid #6A0DAD',
                                textTransform: 'none',
                                color: '#6A0DAD',
                                '&:hover': {
                                    backgroundColor: '#6A0DAD',
                                    color: '#FFFFFF',
                                },
                            }}
                        />
                    </Box>

                    <MobileNav
                        anchorEl={anchorElNav}
                        handleCloseMenu={handleCloseNavMenu}
                        handleOpenMenu={handleOpenNavMenu}
                        links={links}
                    />
                </Toolbar>
            </BodyContainer>
        </AppBar>
    );
};

export default DefaultHeader;