/** @format */

import { useRouter } from 'next/router';
import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import { components } from 'shared-client';
import { AppLink } from 'shared-client/src/components/ui';
import {
    allJobData,
    dataJobData,
    professionalServicesJobData,
    securityJobData,
    softwareAndApplicationsJobData,
} from '../../../data';

const { Box, Container, Typography, Autocomplete, TextField, Tabs, Tab } = components;

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export type TJobDataProps = (typeof allJobData)[number];

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            aria-labelledby={`vertical-tab-${index}`}
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            role='tabpanel'
            sx={{ width: 'min(97.5%, 400px)' }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: { xs: 1, sm: 3 } }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

const Job = (props: TJobDataProps) => (
    <AppLink
        display='block'
        href={`/careersight/${encodeURIComponent(
            props.title,
        )}?category=${encodeURIComponent(props.category)}`}
        key={props.title}
        sx={{ pb: 1 }}
    >
        {props.title}
    </AppLink>
);

const CareersSection = () => {
    const [value, setValue] = useState(0);
    const router = useRouter();

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleSubmit = (event: SyntheticEvent, val: TJobDataProps) => {
        event.preventDefault();
        router
            .push(
                `/careersight/${encodeURIComponent(
                    val.title,
                )}?category=${encodeURIComponent(val.category)}`,
            )
            .catch((err) => {
                // eslint-disable-next-line no-console -- log router push errors
                console.error('Unable to push route: ', err);
            });
    };

    return (
        <Box component='section'>
            <Container maxWidth='md'>
                <Typography
                    gutterBottom
                    sx={{ pt: 4, pb: 2, textAlign: 'center' }}
                    variant='h2'
                >
                    Choose Your Destiny
                </Typography>
                <Box sx={{ pb: 6, width: 'min(95%, 320px)', margin: 'auto' }}>
                    <Autocomplete
                        clearOnEscape
                        closeText={undefined}
                        disablePortal
                        getOptionLabel={(option) => option.title}
                        groupBy={(option) => option.category}
                        id='search-jobs'
                        onChange={handleSubmit}
                        options={allJobData}
                        renderGroup={(params) => (
                            <Box component='li' key={params.key}>
                                <Box
                                    sx={{
                                        fontWeight: 700,
                                        pl: '6px',
                                        color: (theme) => theme.palette.primary.main,
                                    }}
                                >
                                    {params.group}
                                </Box>
                                <Box>{params.children}</Box>
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                                fullWidth
                                label='Search jobs'
                                placeholder={`Search ${allJobData.length} available jobs`}
                                variant='standard'
                            />
                        )}
                        sx={{ width: '100%' }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        height: 'max-content',
                        width: 'min(95%, 550px)',
                        mx: 'auto',
                        px: '16px',
                        borderLeft: '1px solid rgba(0,0,0,0.1)',
                        borderRight: '1px solid rgba(0,0,0,0.1)',
                    }}
                >
                    <Tabs
                        aria-label='Careers'
                        onChange={handleChange}
                        orientation='vertical'
                        sx={{
                            borderRight: 1,
                            borderColor: 'divider',
                            color: 'black',
                            overflow: 'unset',
                            width: '140px',
                        }}
                        textColor='inherit'
                        value={value}
                        variant='scrollable'
                    >
                        <Tab
                            label={`Security (${securityJobData.length})`}
                            {...a11yProps(0)}
                        />
                        <Tab label={`Data (${dataJobData.length})`} {...a11yProps(1)} />
                        <Tab
                            label={`Professional Services (${professionalServicesJobData.length})`}
                            {...a11yProps(2)}
                        />
                        <Tab
                            label={`Software & Applications (${softwareAndApplicationsJobData.length})`}
                            {...a11yProps(3)}
                        />
                    </Tabs>
                    <TabPanel index={0} value={value}>
                        {securityJobData.map((data) => (
                            <Job key={data.title} {...data} />
                        ))}
                    </TabPanel>
                    <TabPanel index={1} value={value}>
                        {dataJobData.map((data) => (
                            <Job key={data.title} {...data} />
                        ))}
                    </TabPanel>
                    <TabPanel index={2} value={value}>
                        {professionalServicesJobData.map((data) => (
                            <Job key={data.title} {...data} />
                        ))}
                    </TabPanel>
                    <TabPanel index={3} value={value}>
                        {softwareAndApplicationsJobData.map((data) => (
                            <Job key={data.title} {...data} />
                        ))}
                    </TabPanel>
                </Box>
            </Container>
        </Box>
    );
};

export default CareersSection;
