import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { CONSTANT } from 'shared-lib';

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const analytics = [
    {
        image: '/stat1.png',
        title: '100%',
        subtitle: 'of students rated their learning experience at I\’deffect Academy as Very Good.',
    },
    {
        image: '/stat2.png',
        title: '100%',
        subtitle: 'of students reported academic improvement.',
    },
    {
        image: '/stat3.png',
        title: '100%',
        subtitle: 'of parents expressed willingness to recommend I\'deffect Academy to others.',
    }, 
];

const AnalyticsSection = () => {
    return (
        <Box
            component='section'
            sx={{
                backgroundColor: '#0A2E5D',
                py: 6,
                textAlign: 'center',
                color: 'white !important',
            }}
        >
            <Container maxWidth='xl'>
              {/*
                <Typography variant='h2' gutterBottom color='white !important'>
                    Analytics
                </Typography>
                */}

                <Grid container spacing={4} justifyContent='center'>
                    {analytics.map((stat, index) => (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                            <Paper
                                elevation={5}
                                sx={{
                                    p: 4,
                                    backgroundColor: '#0A2E5D',
                                    textAlign: 'center',
                                    color: 'white !important',
                                    borderRadius: 2,
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                <Box
                                    component='img'
                                    src={stat.image}
                                    alt={`Statistic Image ${index + 1}`}
                                    sx={{
                                        maxWidth: '100px',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        marginBottom: 2,
                                    }}
                                />
                                <Typography variant='h2' fontWeight='bold'>
                                    {stat.title}
                                </Typography>
                                <Typography variant='body1' sx={{ fontSize: '1.4rem', color: 'white !important', mt: 1, fontWeight: '450'}}>
                                    {stat.subtitle}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AnalyticsSection;