/** @format */

import imgEventFlyer1 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_1.jpg';
import { components, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';
import { REGISTRATION_URL_MAP } from '../../../../lib/constants/routes/url';
import RegisterButton from '../../ui/RegisterButton';

const { Box, Container, Grid, Typography, ButtonGroup } = components;
const { Image, LinkButton } = ui;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const EventsSection = () => {
    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} component='section'>
            <Container maxWidth='xl'>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        mt: '50px',
                    }}
                >
                    <Grid item md={6} sx={{ position: 'relative' }} xs={12}>
                        <Image
                            alt=''
                            src={imgEventFlyer1}
                            sx={{ borderRadius: '16px', width: '100%', height: 'auto' }}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography gutterBottom variant='h2'>
                            Elevate Your Educational Experience at Effectech 2023!
                        </Typography>
                        <Typography variant='body1'>
                            Are you ready to embark on a journey into the future of
                            education? Effectech, the most anticipated edtech conference
                            of the year, invites you to dive into the intriguing theme of
                            &quot;A.I. and Analytics in Education: Friend or Foe?&quot; on
                            the 27th of October 2023!
                        </Typography>
                        <ButtonGroup sx={{ mt: '20px' }}>
                            <RegisterButton
                                color='primary'
                                href={REGISTRATION_URL_MAP['27-Oct-2023']}
                                sx={{ my: 0 }}
                            />
                            <LinkButton color='secondary' href='/conferences'>
                                See More
                            </LinkButton>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default EventsSection;
