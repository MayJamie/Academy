/** @format */

import imgSuccess from 'public/images/success.jpg';
import { components, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';

const { Box, Container, Grid, Typography } = components;
const { Image } = ui;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const DiscoverSection = () => {
    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} component='section'>
            <Container maxWidth='xl'>
                <Grid
                    container
                    spacing={4}
                    sx={{ justifyContent: 'center', alignItems: 'flex-start' }}
                >
                    <Grid item md={6} sx={{ position: 'relative' }} xs={12}>
                        <Image
                            alt=''
                            src={imgSuccess}
                            sx={{ borderRadius: '16px', width: '100%', height: 'auto' }}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography gutterBottom variant='h2'>
                            Discover I&apos;deffect and our Edulabs{' '}
                            <span style={{ whiteSpace: 'nowrap' }}>E-Learning</span>{' '}
                            Platform
                        </Typography>
                        <Typography variant='body1'>
                            I&apos;d Effect Limited is a technologically driven E-learning
                            and human resource development firm, which aims to
                            consistently effect positive change in each sphere of business
                            in which it becomes involves. Speaking of change, COVID-19
                            forced most schools and organizations to adopt learning
                            technologies almost overnight and in some cases, choose a
                            solution which may not have necessarily fit their needs. When
                            decision makers are facing critical decisions such as these,
                            one of the questions which may face them is &quot;What would I
                            do, to positively effect change in human development?&quot;.
                            Edulabs is here to answer that question by providing a well
                            thought out E-learning platform for students
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DiscoverSection;
