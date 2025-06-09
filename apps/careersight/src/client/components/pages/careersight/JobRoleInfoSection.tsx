/** @format */

import { useRouter } from 'next/router';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { components, icons } from 'shared-client';
import { AppLink } from 'shared-client/src/components/ui';
import { allJobData } from '../../../data';
import type { TJobDataProps } from './CareersSection';

const { Box, Container, Typography, Button, ButtonGroup, Rating } = components;
const { ArrowBackIcon } = icons;

const genericSkillAndCompetencyMapper = {
    1: 'Basic',
    2: 'Intermediate',
    3: 'Advanced',
} as const;

const SalaryInfo = (
    props: Pick<TJobDataProps, 'salaryMin' | 'salaryMax'> & {
        isAnnual: boolean;
        setIsAnnual: Dispatch<SetStateAction<boolean>>;
    },
) => {
    return props.salaryMin && props.salaryMax ? (
        <Box paddingTop={2}>
            <Typography paddingBottom={2} variant='h3'>
                {props.isAnnual ? 'Annual' : 'Monthly'} Salary Range (TTD)
            </Typography>
            <ButtonGroup sx={{ mb: 2 }}>
                <Button
                    color='primary'
                    onClick={() => {
                        props.setIsAnnual(true);
                    }}
                    variant='contained'
                >
                    Annual
                </Button>
                <Button
                    color='secondary'
                    onClick={() => {
                        props.setIsAnnual(false);
                    }}
                    variant='contained'
                >
                    Monthly
                </Button>
            </ButtonGroup>
            <Typography color={props.isAnnual ? 'primary' : 'secondary'} fontWeight={500}>
                $
                {(props.isAnnual
                    ? props.salaryMin
                    : Number((props.salaryMin / 12).toFixed(0))
                ).toLocaleString()}{' '}
                to $
                {(props.isAnnual
                    ? props.salaryMax
                    : Number((props.salaryMax / 12).toFixed(0))
                ).toLocaleString()}
            </Typography>
        </Box>
    ) : null;
};

const TechnicalSkillInfo = (
    props: Pick<TJobDataProps, 'technicalSkillsAndCompetencies'>,
) => {
    return (
        <>
            {props.technicalSkillsAndCompetencies.map((skill) => (
                <Box
                    key={skill.title}
                    sx={{
                        display: 'flex',
                        width: 'min(420px, 90%)',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pb: '8px',
                    }}
                >
                    <span>{skill.title}</span>
                    <Rating
                        max={6}
                        name='read-only'
                        readOnly
                        sx={(theme) => ({
                            color: theme.palette.secondary.main,
                        })}
                        value={skill.rating}
                    />
                </Box>
            ))}
        </>
    );
};

const GenericSkillInfo = (props: Pick<TJobDataProps, 'genericSkillsAndCompetencies'>) => {
    return (
        <>
            {props.genericSkillsAndCompetencies.map((skill) => (
                <Box
                    key={skill.title}
                    sx={{
                        display: 'flex',
                        width: 'min(420px, 90%)',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pb: '8px',
                    }}
                >
                    <div>{skill.title}</div>
                    <Box sx={{ fontWeight: 700 }}>
                        {genericSkillAndCompetencyMapper[skill.rating as 1 | 2 | 3]}
                    </Box>
                </Box>
            ))}
        </>
    );
};

const QualificationsInfo = (props: Pick<TJobDataProps, 'qualifications'>) => {
    return props.qualifications.length ? (
        <Box paddingTop={2}>
            <Typography paddingBottom={2} variant='h3'>
                Qualifications
            </Typography>
            <div>
                {props.qualifications.map((qualification, index) => (
                    <div key={index}>
                        {qualification.link ? (
                            <AppLink href={qualification.link} target='_blank'>
                                {qualification.title || qualification.link}
                            </AppLink>
                        ) : (
                            <div>{qualification.title}</div>
                        )}
                    </div>
                ))}
            </div>
        </Box>
    ) : null;
};

const JobRoleInfoSection = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const router = useRouter();
    const { jobRole, category } = router.query;
    const goBack = () => {
        router.push('/careersight').catch((err) => {
            // eslint-disable-next-line no-console -- show route error
            console.error('Unable to push route: ', err);
        });
    };
    const jobData = allJobData.find(
        (job) => job.title.toLowerCase() === jobRole?.toString().toLowerCase(),
    );

    return (
        <Box component='section'>
            <Container maxWidth='md' sx={{ textAlign: 'left', pt: 2 }}>
                <Button
                    onClick={goBack}
                    startIcon={
                        <ArrowBackIcon
                            fontSize='inherit'
                            sx={{ verticalAlign: 'text-bottom' }}
                        />
                    }
                >
                    Back
                </Button>
                {jobData ? (
                    <>
                        <Typography gutterBottom sx={{ pt: 4, pb: 2 }} variant='h2'>
                            {jobRole}
                            <Typography
                                gutterBottom
                                sx={{ textTransform: 'uppercase' }}
                                variant='body1'
                            >
                                {category}
                            </Typography>
                        </Typography>
                        <div>
                            <Typography>{jobData.description}</Typography>
                        </div>
                        <SalaryInfo
                            isAnnual={isAnnual}
                            salaryMax={jobData.salaryMax}
                            salaryMin={jobData.salaryMin}
                            setIsAnnual={setIsAnnual}
                        />
                        <Box paddingTop={2}>
                            <Typography paddingBottom={2} variant='h3'>
                                Skills & Competencies
                            </Typography>
                            <Typography paddingBottom={2} variant='h6'>
                                Technical
                            </Typography>
                            <div>
                                <TechnicalSkillInfo
                                    technicalSkillsAndCompetencies={
                                        jobData.technicalSkillsAndCompetencies
                                    }
                                />
                            </div>
                            <Box paddingTop={2}>
                                <Typography paddingBottom={2} variant='h6'>
                                    Generic
                                </Typography>
                                <div>
                                    <GenericSkillInfo
                                        genericSkillsAndCompetencies={
                                            jobData.genericSkillsAndCompetencies
                                        }
                                    />
                                </div>
                            </Box>
                        </Box>
                        <QualificationsInfo qualifications={jobData.qualifications} />
                    </>
                ) : (
                    <Box sx={{ py: '64px' }}>
                        <Typography variant='h3'>
                            No career data found found for &quot;{jobRole}&quot;
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default JobRoleInfoSection;
