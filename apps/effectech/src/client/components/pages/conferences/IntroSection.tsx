/** @format */

import { components } from 'shared-client';

const { Box, Container, Typography } = components;

const IntroSection = () => {
    return (
        <Box
            component='section'
            sx={{
                background: `url('/images/background/simple-shiny-2.svg')`,
                backgroundSize: 'cover',
                pb: 'unset',
            }}
        >
            <Container
                maxWidth='xl'
                sx={{
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    gutterBottom
                    sx={{ textAlign: 'center', color: 'white.main' }}
                    variant='h1'
                >
                    Upcoming Events
                </Typography>
            </Container>
        </Box>
    );
};

export default IntroSection;
