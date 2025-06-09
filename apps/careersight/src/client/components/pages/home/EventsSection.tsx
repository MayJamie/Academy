/** @format */

import { components, icons, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';
import { EFFECTECH_URL } from '../../../../lib/constants/routes/url';

const { Box, Container, Grid, Typography, Button } = components;
const { AppLink } = ui;
const { LaunchIcon } = icons;
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
                        paddingTop: 6,
                        alignItems: 'flex-start',
                    }}
                >
                    <Grid
                        item
                        md={4}
                        sx={{ textAlign: { xs: 'left', sm: 'center' } }}
                        xs={12}
                    >
                        <Typography gutterBottom variant='h2'>
                            Upcoming Events
                        </Typography>
                        <Typography gutterBottom variant='body1'>
                            Visit our{' '}
                            <AppLink href={EFFECTECH_URL}>
                                Effectech Conference website
                            </AppLink>{' '}
                            for more details on what&apos;s next!
                        </Typography>
                        <Button
                            LinkComponent={AppLink}
                            href={EFFECTECH_URL}
                            startIcon={<LaunchIcon fontSize='inherit' />}
                            sx={{ mt: '16px' }}
                            variant='contained'
                        >
                            View Events
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default EventsSection;
