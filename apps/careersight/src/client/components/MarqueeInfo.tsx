/** @format */

import type { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';
import { components, icons } from 'shared-client';

const { Card, Typography, blue, purple, green, orange, red, styled } = components;
const { DevicesIcon, FactCheckIcon, InsightsIcon, PeopleIcon, SchoolIcon } = icons;

interface IMarqueeItem {
    img: ReactNode;
    title: string;
    bgColor: string;
    description: string;
}

const marqueeItems: IMarqueeItem[] = [
    {
        img: <InsightsIcon fontSize='large' />,
        title: 'Analytics Driven',
        bgColor: blue[500],
        description:
            'Data driven dashboards and metrics available throughout the application',
    },
    {
        img: <PeopleIcon fontSize='large' />,
        title: 'Education Partner',
        bgColor: purple[500],
        description: 'Bringing all stakeholders together as partners in education',
    },
    {
        img: <SchoolIcon fontSize='large' />,
        title: 'Learning Focused',
        bgColor: green[500],
        description: 'Ensuring that the learning process is as seamless as possible',
    },
    {
        img: <FactCheckIcon fontSize='large' />,
        title: 'Holistic Perspective',
        bgColor: orange[500],
        description: 'Focused on all factors that feed into academic and life success',
    },
    {
        img: <DevicesIcon fontSize='large' />,
        title: 'Device Support',
        bgColor: red[500],
        description: 'Better experiences for multiple devices through responsive design',
    },
];

const StyledMarquee = styled(Marquee)({});

const MarqueeInfo = () => {
    return (
        <StyledMarquee
            delay={1}
            gradient={false}
            pauseOnHover
            speed={30}
            sx={{ py: '16px' }}
        >
            {marqueeItems.map((item) => (
                <Card
                    key={item.title}
                    raised
                    sx={{
                        width: 240,
                        height: '100%',
                        textAlign: 'center',
                        p: 2,
                        mx: 3,
                        color: 'white.main',
                        backgroundColor: item.bgColor,
                    }}
                >
                    {item.img}
                    <Typography sx={{ py: 2 }} variant='h6'>
                        {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                </Card>
            ))}
        </StyledMarquee>
    );
};

export default MarqueeInfo;
