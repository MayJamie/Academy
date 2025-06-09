/** @format */

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { CONSTANT } from 'shared-lib';

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const testimonials = [
    {
        name: 'S.L. Sardarsingh',
        title: 'Vice Principal, Retired',
        text: "As the former Vice Principal of a Government Secondary School, I am deeply impressed by I'deffect Academy. Their commitment to quality educational content is unmatched. The Academy's personalized performance reports and career advising from industry experts in fields such as Artificial Intelligence and Sustainability provide students with significant advantages. These added value services enhance the learning experience and future prospects of every student. I wholeheartedly endorse I'deffect Academy for its innovative approach to education and strongly recommend it to parents seeking the best for their children."
    }
];

const TestimonialSection = () => {
    return (
        <Box
            component='section'
            sx={{
                background: 'linear-gradient(135deg, rgba(75, 0, 130, 0.6), rgba(0, 0, 139, 0.6), rgba(30, 144, 255, 0.6))',
                py: 6,
                textAlign: 'center',
            }}
        >
            <Container maxWidth='xl'>
                <Typography 
                    variant='h2' 
                    gutterBottom 
                    sx={{
                        color: 'white !important',
                        textAlign: 'center'
                    }}
                >
                    Testimonials / Clients
                </Typography>
                <Grid container spacing={4} justifyContent='center'>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={10} md={8} key={index}>
                            <Paper
                                elevation={5}
                                sx={{
                                    p: 4,
                                    textAlign: 'left',
                                    background: {CLASS_SECTION_ANIMATED_BG},
                                    color: 'black', 
                                    borderRadius: 3,
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                                    borderLeft: '6px solid #4B0082',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                {/* Name */}
                                <Typography
                                    variant='h6'
                                    sx={{
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    {testimonial.name}
                                </Typography>

                                {/* Title */}
                                <Typography
                                    variant='body2'
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        textAlign: 'center',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    {testimonial.title}
                                </Typography>

                                {/* Testimonial Text */}
                                <Typography
                                    variant='body1'
                                    gutterBottom
                                    sx={{
                                        fontStyle: 'italic',
                                        mt: 2,
                                    }}
                                >
                                    "{testimonial.text}"
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TestimonialSection;
