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
                    color='white.main'
                    gutterBottom
                    textAlign='center'
                    variant='h1'
                >
                    About Us
                </Typography>
            </Container>
        </Box>
    );
};

export default IntroSection;
