/** @format */

import imgEventFlyer1 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_1.jpg';
import { ComponentProps, ReactNode } from 'react';
import { components, ui } from 'shared-client';
import { Typography } from 'shared-client/src/components';
import RegisterButton from '../ui/RegisterButton';

const { Box, Container } = components;
const { Image } = ui;

interface IBiography {
    name: string;
    image: ComponentProps<typeof Image>['src'];
    bio: (string | ReactNode)[];
}
interface IProps {
    speakers: IBiography[];
    registrationLink: string;
}

const Biographies = ({ speakers, registrationLink }: IProps) => {
    return (
        <Container maxWidth='xl'>
            <Typography sx={{ textAlign: 'center', pb: '50px' }} variant='h2'>
                About our Speakers
            </Typography>
            <Box
                sx={{
                    maxWidth: '75ch',
                    minHeight: '250px',
                    mx: 'auto',
                    textAlign: 'justify',
                }}
            >
                {speakers.map((speaker) => {
                    return (
                        <Box key={speaker.name} sx={{ pb: '40px' }}>
                            <Typography sx={{ textAlign: 'center' }} variant='h4'>
                                {speaker.name}
                            </Typography>
                            <div>
                                <Image
                                    alt=''
                                    src={speaker.image || imgEventFlyer1}
                                    sx={{
                                        float: 'left',
                                        display: 'block',
                                        width: { xs: '100%', sm: 'min(100%, 220px)' },
                                        height: { xs: 'auto', sm: '220px' },
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        mt: '4px',
                                        mb: { xs: '24px', sm: '8px' },
                                        mr: '16px',
                                    }}
                                />
                                <Typography component='div'>
                                    <>
                                        {speaker.bio.map((paragraph, index) => {
                                            return <p key={index}>{paragraph}</p>;
                                        })}
                                    </>
                                </Typography>
                            </div>
                        </Box>
                    );
                })}
            </Box>
            <RegisterButton href={registrationLink} />
        </Container>
    );
};

export default Biographies;
