/** @format */

import dataJobData from './dataJobs.json';
import professionalServicesJobData from './professionalServicesJobs.json';
import securityJobData from './securityJobs.json';
import softwareAndApplicationsJobData from './softwareAndApplicationsJobs.json';

const securityJobDataExtended = securityJobData.map((jobData, index) => ({
    ...jobData,
    id: index + 1,
    category: 'Security',
}));
const dataJobDataExtended = dataJobData.map((jobData, index) => ({
    ...jobData,
    id: securityJobDataExtended.length + index + 1,
    category: 'Data',
}));
const professionalServicesJobDataExtended = professionalServicesJobData.map(
    (jobData, index) => ({
        ...jobData,
        id: securityJobDataExtended.length + dataJobDataExtended.length + index + 1,
        category: 'Professional Services',
    }),
);
const softwareAndApplicationsJobDataExtended = softwareAndApplicationsJobData.map(
    (jobData, index) => ({
        ...jobData,
        id:
            securityJobDataExtended.length +
            dataJobDataExtended.length +
            professionalServicesJobDataExtended.length +
            index +
            1,
        category: 'Software and Applications',
    }),
);

const allJobData = [
    ...securityJobDataExtended, // pg 16-28/160 in pdf
    ...dataJobDataExtended, // pg 70/160 in pdf
    ...professionalServicesJobDataExtended, // pg 81-89/160 in pdf
    ...softwareAndApplicationsJobDataExtended, // pg 100/160 in pdf
];

export {
    allJobData,
    dataJobDataExtended as dataJobData,
    professionalServicesJobDataExtended as professionalServicesJobData,
    securityJobDataExtended as securityJobData,
    softwareAndApplicationsJobDataExtended as softwareAndApplicationsJobData,
};
