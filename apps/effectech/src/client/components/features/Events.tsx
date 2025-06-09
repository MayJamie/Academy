/** @format */

import type { ComponentProps, ReactNode } from 'react';
import { components, ui } from 'shared-client';
import RegisterButton from '../ui/RegisterButton';

const {
    Grid,
    Box,
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
    Typography,
    Container,
    List,
    ListItem,
    useTheme,
} = components;
const { Image, AppLink } = ui;

interface IEventItemProps {
    startTime: string;
    endTime?: string;
    info: string;
    panelists: {
        name: string | ReactNode;
    }[];
}
interface IEventItemsProps {
    name: string;
    registrationLink: string;
    items: IEventItemProps[];
    images: ComponentProps<typeof Image>['src'][];
}

const Events = ({ name, registrationLink, items, images }: IEventItemsProps) => {
    const theme = useTheme();

    return (
        <div>
            <Container maxWidth='lg'>
                <Timeline
                    sx={{
                        pt: '50px',
                        px: 0,
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'center',
                            width: 'min(100%, 30ch)',
                            mx: 'auto',
                            pb: '50px',
                        }}
                        variant='h2'
                    >
                        <Box sx={{ pb: '30px' }}>Agenda</Box>
                        <AppLink
                            href={registrationLink}
                            sx={{ fontSize: '75%' }}
                            title='Register today'
                        >
                            {name}
                        </AppLink>
                    </Typography>
                    {items.map((item) => {
                        return (
                            <TimelineItem key={item.startTime.toString()}>
                                <TimelineOppositeContent
                                    sx={{ color: 'black.main', flex: { xs: 0.6, sm: 1 } }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            padding: { xs: 0, sm: '6px 16px' },
                                            [theme.breakpoints.down('sm')]: {
                                                fontSize: '1.2rem',
                                            },
                                        }}
                                    >
                                        <>
                                            <Box
                                                component='span'
                                                sx={{
                                                    display: {
                                                        xs: 'block',
                                                        sm: 'inline',
                                                    },
                                                }}
                                            >{`${item.startTime} to `}</Box>
                                            <Box
                                                component='span'
                                                sx={{
                                                    display: {
                                                        xs: 'block',
                                                        sm: 'inline',
                                                    },
                                                }}
                                            >
                                                {item.endTime}
                                            </Box>
                                        </>
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ color: 'black.main' }}>
                                    <Typography
                                        sx={{ padding: { xs: 0, sm: '6px 16px' } }}
                                    >
                                        {item.info}{' '}
                                    </Typography>
                                    <List>
                                        {item.panelists.map((panelist, index) => {
                                            return (
                                                <ListItem
                                                    key={index}
                                                    sx={{
                                                        padding: {
                                                            xs: '6px 0',
                                                            sm: '6px 16px',
                                                        },
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            padding: {
                                                                xs: 0,
                                                                sm: '6px 16px',
                                                            },
                                                        }}
                                                    >
                                                        {panelist.name}
                                                    </Typography>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                    <RegisterButton href={registrationLink} />
                </Timeline>
                {Boolean(images.length) && (
                    <>
                        <Grid
                            container
                            spacing={8}
                            sx={{ justifyContent: 'center', alignItems: 'flex-start' }}
                        >
                            {images.map((img, index) => {
                                return (
                                    <Grid item key={index}>
                                        <Image
                                            alt='Event image'
                                            src={img}
                                            sx={{
                                                borderRadius: '16px',
                                                width: 'min(900px, 90%)',
                                                height: 'auto',
                                                display: 'block',
                                                mx: 'auto',
                                            }}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <RegisterButton href={registrationLink} />
                    </>
                )}
            </Container>
        </div>
    );
};

export default Events;
