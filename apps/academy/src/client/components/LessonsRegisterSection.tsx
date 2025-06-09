/** @format */

import { REGISTRATION_URL } from '@@components/layout/AppLayout';
import { components, icons, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';
import RegisterButton from 'shared-client/src/components/ui/RegisterButton';

const { Box, Container, Grid, Typography, Button } = components;
const { AppLink } = ui;
const { LaunchIcon } = icons;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const LessonsRegisterSection = () => {
    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} component='section'> 
            <Container maxWidth='xl'>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        pb: '40px',
                    }}
                >
                    <Grid
                        item
                        md={6}
                        sx={{ textAlign: { xs: 'center', sm: 'center' } }}
                        xs={12}
                    >
                        <Box
                            sx={{
                                display: 'inline-block',
                                width: '100%',
                                padding: '60px',
                                borderRadius: '12px',
                                backgroundColor: 'rgba(37, 60, 145, 0.05)',
                                border: '2px solid rgba(37, 60, 145, 0.8)',
                                color: 'white',
                                textAlign: 'center',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography gutterBottom variant='h2'>
                                Registration
                            </Typography>
                            <Typography
                                gutterBottom
                                maxWidth='clamp(10ch, 100%, 60ch)'
                                sx={{ mx: 'auto', fontWeight: 450 }}
                                variant='body1'
                            >
                                Click the button below to sign up with us at I&apos;deffect Academy!
                            </Typography>

                            <RegisterButton></RegisterButton>

                            {/* Old Button Style
                            <Button
                                LinkComponent={AppLink}
                                href={`${REGISTRATION_URL}`}
                                startIcon={<LaunchIcon fontSize='inherit' />}
                                sx={{ mt: '16px' }}
                                variant='outlined'
                            >
                                Register Now
                            </Button>
                            */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LessonsRegisterSection;