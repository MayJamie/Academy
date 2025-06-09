/** @format */

import imgDarnellNoel from 'public/images/profiles/DarnellNoel.png';
import imgKerronRamganesh from 'public/images/profiles/KerronRamganesh.png';
import imgKishanRoopan from 'public/images/profiles/KishanRoopan.png';
import imgRogerStHilaire from 'public/images/profiles/RogerStHilaire.png';
import imgShivaRamsingh from 'public/images/profiles/ShivaRamsingh.png';
import imgYuvaRoopchansingh from 'public/images/profiles/YuvaRoopchansingh.png';
import type { ComponentProps } from 'react';
import { components, ui } from 'shared-client';

const {
    Box,
    Container,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Divider,
} = components;
const { Image } = ui;

interface IProfileProps {
    firstName: string;
    lastName: string;
    role: string;
    jobTitle: string;
    qualifications: string[];
    img: ComponentProps<typeof Image>['src'];
}

const profiles: IProfileProps[] = [
    {
        firstName: 'Shiva',
        lastName: 'Ramsingh',
        role: 'Director',
        jobTitle: 'Risk Management and Team Lead',
        qualifications: [
            'International Masters in Business Development & Innovation',
            'Risk Management Assurance',
            'Innovation Leadership',
        ],
        img: imgShivaRamsingh,
    },
    {
        firstName: 'Roger',
        lastName: 'St. Hilaire',
        role: 'Director',
        jobTitle: 'Governance and Data',
        qualifications: [
            'Bsc Management Studies',
            'Certified in Governance of Enterprise Information Technology (CGEIT)',
            'Certified Information Security Manager (CISM)',
        ],
        img: imgRogerStHilaire,
    },
    {
        firstName: 'Yuva',
        lastName: 'Roopchansingh',
        role: 'Director',
        jobTitle: 'Educational Leadership',
        qualifications: [
            'M.Ed. Inclusive and Special Education',
            'Bsc Biology Biochemistry',
            'Sign Language Levels 1 & 2',
        ],
        img: imgYuvaRoopchansingh,
    },
    {
        firstName: 'Kerron',
        lastName: 'Ramganesh',
        role: 'Director',
        jobTitle: 'Human Resources and Development',
        qualifications: [
            'MBA Marketing Management',
            'MSc eLearning Technology (Dist.)',
            'Bsc Computer Science',
        ],
        img: imgKerronRamganesh,
    },
    {
        firstName: 'Kishan',
        lastName: 'Roopan',
        role: 'Director',
        jobTitle: 'Finance and Governance',
        qualifications: ['Msc Finance', 'B.A. Economics (Econometrics Specialization)'],
        img: imgKishanRoopan,
    },
    {
        firstName: 'Darnell',
        lastName: 'Noel',
        role: 'Application Developer',
        jobTitle: 'Software Engineering',
        qualifications: [
            'BSc Mechanical Engineering',
            'Certified Quality Technician',
            'Certified in Full Stack Web Application Development',
        ],
        img: imgDarnellNoel,
    },
];

const TeamSection = () => {
    return (
        <Box component='section'>
            <Container maxWidth='lg'>
                <Container
                    maxWidth='md'
                    sx={{
                        maxWidth: 'clamp(60ch, 100%, 75ch)',
                        mx: 'auto',
                        textAlign: 'center',
                    }}
                >
                    <Typography gutterBottom sx={{ pt: 6, pb: 2 }} variant='h2'>
                        Meet the Team
                    </Typography>
                    <Typography gutterBottom>
                        We bring a wealth of experience from a wide variety of backgrounds
                        such as Education, Risk Management and Software Development.
                        We&apos;re led by a highly skilled and professional team who
                        constantly challenges themselves, with the goal to unlock the
                        untapped potential in Education Technology.
                    </Typography>
                </Container>
                <Grid
                    container
                    rowSpacing={8}
                    sx={{ paddingTop: 8, justifyContent: 'center' }}
                >
                    {profiles.map((profile) => (
                        <Grid
                            item
                            key={`${profile.firstName} ${profile.lastName}`}
                            md={4}
                            sm={6}
                            sx={{
                                willChange: 'transform',
                                filter: 'grayscale(100%)',
                                transition: 'all 0.5s ease-in-out',
                                '&:hover, &:focus': {
                                    filter: 'grayscale(0%)',
                                    transform: 'scale(1.03)',
                                },
                            }}
                            xl={3}
                            xs={12}
                        >
                            <Card
                                // raised
                                sx={{
                                    maxWidth: 260,
                                    mx: 'auto',
                                    borderBottomRightRadius: 20,
                                    boxShadow: 'unset',
                                }}
                            >
                                <Typography
                                    color='white.main'
                                    sx={{
                                        width: 'max-content',
                                        zIndex: 1,
                                        backgroundColor: 'secondary.main',
                                        px: 1,
                                        py: 0.25,
                                        opacity: 0.9,
                                        borderBottomRightRadius: 10,
                                        borderTopLeftRadius: 10,
                                    }}
                                    variant='h6'
                                >
                                    {profile.role}
                                </Typography>
                                <CardActionArea>
                                    <CardMedia sx={{ position: 'relative' }}>
                                        <Image
                                            alt={`profile picture of ${profile.firstName} ${profile.lastName}`}
                                            // fill
                                            src={profile.img}
                                            sx={{
                                                width: 'auto',
                                                height: '240px',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                            }}
                                        />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography
                                            component='div'
                                            gutterBottom
                                            variant='h5'
                                        >
                                            {profile.firstName} {profile.lastName}
                                        </Typography>
                                        <Typography
                                            component='div'
                                            gutterBottom
                                            sx={{ color: 'primary.main' }}
                                            variant='h6'
                                        >
                                            {profile.jobTitle}
                                            <Divider light />
                                        </Typography>
                                        <Typography
                                            sx={{ color: 'text.primary' }}
                                            variant='body2'
                                        >
                                            {profile.qualifications.map(
                                                (qualification) => (
                                                    <Box
                                                        component='span'
                                                        key={qualification}
                                                        sx={{
                                                            py: 0.25,
                                                            display: 'block',
                                                        }}
                                                    >
                                                        {qualification}
                                                    </Box>
                                                ),
                                            )}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TeamSection;
