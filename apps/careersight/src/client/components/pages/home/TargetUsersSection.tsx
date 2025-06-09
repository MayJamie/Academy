/** @format */

import { components, icons } from 'shared-client';
import type { SxProps } from 'shared-client/src/components';

const { Box, Container, Grid, Typography, SvgIcon, Stack } = components;
const { CustomTeacherIcon, CustomStudentIcon, CustomSchoolIcon } = icons;

interface IGridItemProps {
    title: string;
    SvgComponent: JSX.Element;
}

const itemSx: SxProps = {
    boxSizing: 'content-box',
    fontSize: '8rem',
    color: 'black.main',
    padding: 5,
    backgroundColor: 'white.main',
    borderRadius: '50%',
    overflow: 'visible',
    mixBlendMode: 'screen',
};

const items: IGridItemProps[] = [
    {
        title: 'Private Educators',
        SvgComponent: (
            <SvgIcon
                component={CustomTeacherIcon}
                inheritViewBox
                sx={itemSx}
                titleAccess='teacher icon'
            />
        ),
    },
    {
        title: 'Students Aged 6+',
        SvgComponent: (
            <SvgIcon
                component={CustomStudentIcon}
                inheritViewBox
                sx={itemSx}
                titleAccess='student icon'
            />
        ),
    },
    {
        title: 'Academic Institutions',
        SvgComponent: (
            <SvgIcon
                component={CustomSchoolIcon}
                inheritViewBox
                sx={itemSx}
                titleAccess='school icon'
            />
        ),
    },
];

const TargetUsersSection = () => {
    return (
        <Box
            component='section'
            sx={{
                py: 10,
                background:
                    'linear-gradient(45deg, rgba(180,43,68,1) 0%, rgba(52,75,156,1) 100%)',
                color: 'common.white',
                textAlign: 'center',
            }}
        >
            <Container maxWidth='xl'>
                <Typography gutterBottom variant='h2'>
                    Who is it for?
                </Typography>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    paddingTop={8}
                    position='relative'
                    rowSpacing={{ xs: 30, md: 10 }}
                >
                    {items.map((item) => {
                        return (
                            <Grid item key={item.title} md={4} xs={12}>
                                {item.SvgComponent}
                                <Typography gutterBottom marginTop={2} variant='h3'>
                                    {item.title}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
                <Stack spacing={30} />
            </Container>
        </Box>
    );
};

export default TargetUsersSection;
