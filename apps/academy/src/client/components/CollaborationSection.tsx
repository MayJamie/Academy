/** @format */

import { Box, Container, Grid, Typography } from '@mui/material';
import { CONSTANT } from 'shared-lib';

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const logos = [
    '/google.png',
    // '/uwi.png',
    '/classroom.png',
    // '/uwi.png',
    // '/google.png',
];

const CollaborationSection = () => {
    return (
        <Box
            className={CLASS_SECTION_ANIMATED_BG}
            component='section'
            sx={{
                display: 'flex',
                minHeight: 225,
                pt: { xs: 4, md: 2 },
                pb: 2,
                textAlign: 'center',
            }}
        >
            <Container maxWidth='xl'>
                <Typography variant='h2' gutterBottom color= 'grey'>
                    Collaboration
                </Typography>
                <Grid container spacing={2} justifyContent='center' alignItems='center'>
                    {logos.map((logo, index) => (
                        <Grid item xs={4} sm={2.4} md={2.4} key={index}>
                            <Box
                                component='img'
                                src={logo}
                                alt={`Partner Logo ${index + 1}`}
                                sx={{
                                    maxWidth: '100%',
                                    height: { xs: 50, sm: 70, md: 90 },
                                    objectFit: 'contain',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CollaborationSection;