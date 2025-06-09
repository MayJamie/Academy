/** @format */

import imgFlyer1 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_1.jpg';
import imgFlyer2 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_2.jpg';
import imgFlyer3 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_3.jpg';
import imgAleksandra from 'public/images/events/27-Oct-2023/speakers/aleksandra-przegalinska.png';
import imgPhaedra from 'public/images/events/27-Oct-2023/speakers/phaedra-mohammed.png';
import imgUrvashi from 'public/images/events/27-Oct-2023/speakers/urvashi-roopnarine.jpg';
import imgZameer from 'public/images/events/27-Oct-2023/speakers/zameer-mohammed.jpg';
import imgRoger from 'public/images/profiles/RogerStHilaire.png';
import type { ComponentProps, ReactNode } from 'react';
import { components, ui } from 'shared-client';
import { REGISTRATION_URL_MAP } from '../../../../lib/constants/routes/url';
import Biographies from '../../features/Biographies';
import Events from '../../features/Events';

const { Box, Typography, Grid, Container } = components;
const { AppLink, Image } = ui;

interface IInfo {
    heading: string | ReactNode;
    body: string;
}

const eventItemData: ComponentProps<typeof Events>['items'] = [
    {
        startTime: '9:00 a.m.',
        endTime: '9:15 a.m.',
        info: 'Introductions and welcome address',
        panelists: [
            {
                name: (
                    <>
                        <AppLink href='https://www.linkedin.com/in/urvashi-tiwari-roopnarine-94b49167/'>
                            Ms. Urvashi Tiwari-Roopnarine
                        </AppLink>
                        <span> (introductions)</span>
                    </>
                ),
            },
            {
                name: (
                    <>
                        <AppLink href='https://www.linkedin.com/in/shiva-ramsingh-35259b48/'>
                            Mr. Shiva Ramsingh
                        </AppLink>
                        <span> (welcome address)</span>
                    </>
                ),
            },
        ],
    },
    {
        startTime: '9:15 a.m.',
        endTime: '10:00 a.m.',
        info: 'Keynote speaker',
        panelists: [
            {
                name: (
                    <AppLink href='https://www.linkedin.com/in/aleksandra-przegalinska-5b17125/'>
                        Dr. Aleksandra Przegalinska
                    </AppLink>
                ),
            },
        ],
    },
    {
        startTime: '10:00 a.m.',
        endTime: '10:15 a.m.',
        info: 'Questions and answers (keynote address)',
        panelists: [],
    },
    {
        startTime: '10:15 a.m.',
        endTime: '11:15 a.m.',
        info:
            'Panel Discussion - Sources and Solutions: How can A.I. and Analytics be used to drive inclusivity ' +
            ' and social change in our education systems?',
        panelists: [
            {
                name: (
                    <>
                        <AppLink href='https://www.linkedin.com/in/urvashi-tiwari-roopnarine-94b49167/'>
                            Ms. Urvashi Tiwari-Roopnarine
                        </AppLink>
                        <span> (moderator)</span>
                    </>
                ),
            },
            {
                name: (
                    <>
                        <AppLink href='https://www.linkedin.com/in/aleksandra-przegalinska-5b17125/'>
                            Dr. Aleksandra Przegalinska
                        </AppLink>
                        <span> (panelist)</span>
                    </>
                ),
            },
            {
                name: (
                    <>
                        <AppLink href='https://sta.uwi.edu/fst/dcit/staff-profiles/Phaedra-Mohammed'>
                            Dr. Phaedra Mohammed
                        </AppLink>
                        <span> (panelist)</span>
                    </>
                ),
            },
            {
                name: (
                    <>
                        <AppLink href='https://www.linkedin.com/in/dr-zameer-mohammed-3399b017/'>
                            Dr. Zameer Mohammed
                        </AppLink>
                        <span> (panelist)</span>
                    </>
                ),
            },
            {
                name: (
                    <>
                        <AppLink href='https://www.linkedin.com/in/roger-st-hilaire-79708814/'>
                            Mr. Roger St. Hilaire
                        </AppLink>
                        <span> (panelist)</span>
                    </>
                ),
            },
        ],
    },
    {
        startTime: '11:20 a.m.',
        endTime: '11:45 a.m.',
        info: 'Questions and answers (panel discussion)',
        panelists: [],
    },
    {
        startTime: '12:00 p.m.',
        endTime: '1:00 p.m.',
        info: 'Learning track facilitation (choose one)',
        panelists: [
            {
                name: (
                    <>
                        <AppLink href='https://www.linkedin.com/in/roger-st-hilaire-79708814/'>
                            Mr. Roger St. Hilaire
                        </AppLink>
                        <span> - Learning track 1: Learning Analytics</span>
                    </>
                ),
            },
            {
                name: (
                    <>
                        <AppLink href='https://www.linkedin.com/in/dr-zameer-mohammed-3399b017/'>
                            Dr. Zameer Mohammed
                        </AppLink>
                        <span> - Learning track 2: A.I. in Education</span>
                    </>
                ),
            },
        ],
    },
    {
        startTime: '1:00 p.m.',
        endTime: '1:30 p.m.',
        info: 'Close and virtual networking',
        panelists: [],
    },
];

const statements: IInfo[] = [
    {
        heading: 'Uncover the Future of Learning',
        body:
            "Effectech is not just a conference, it's an experience that will redefine the way we think about education. " +
            'With a focus on cutting-edge analytics and artificial intelligence, this event promises to equip you with the ' +
            'insights, tools, and strategies to stay at the forefront of educational innovation.',
    },
    {
        heading: ' Interactive Workshops & Expert Insights',
        body:
            'Engage with industry leaders, visionaries, and experts who are shaping the landscape of education. ' +
            'Our carefully curated workshops and sessions will provide hands-on experiences and deep dives into the latest technologies, ' +
            'ensuring you leave with practical knowledge that can be immediately applied in your educational endeavors.',
    },
    {
        heading: 'Network & Collaborate',
        body:
            'Connect with like-minded educators, technologists, and innovators from around the globe. ' +
            'Effectech provides a dynamic platform for forging meaningful relationships, exploring collaborative ' +
            'opportunities, and staying in the loop with the latest trends and breakthroughs in the field.',
    },
    {
        heading: 'Shape the Future of Education',
        body:
            'Effectech offers a unique opportunity to be at the forefront of designing the digital future of education. ' +
            'Discover how analytics and AI can be harnessed to create intuitive, personalized learning ' +
            'platforms that cater to the needs of diverse learners.',
    },
    {
        heading: 'Secure Your Spot',
        body:
            "Don't miss out on this game-changing event! Register now for Effectech 2023 and be part of a " +
            'transformative journey that will shape the future of education. Grab your tickets ' +
            'today and join us in unlocking the potential of Analytics and AI in education!',
    },
    {
        heading: (
            <AppLink href={REGISTRATION_URL_MAP['27-Oct-2023']}>Register Now</AppLink>
        ),
        body:
            "Seize this opportunity to be a part of the educational revolution. Together, we'll answer " +
            'the crucial question: Are A.I. and Analytics in education friends or foes? ' +
            'Join us at Effectech and be the driving force behind the future of learning!',
    },
];

const speakers: ComponentProps<typeof Biographies>['speakers'] = [
    {
        name: 'Ms. Urvashi Tiwari-Roopnarine',
        image: imgUrvashi,
        bio: [
            'Urvashi Tiwari-Roopnarine is an accomplished and dynamic journalist with a strong track record in ' +
                'reporting and storytelling. With extensive experience in the field of broadcast journalism, she has ' +
                'consistently demonstrated exceptional skills in researching, writing, and presenting news stories of local ' +
                "and national significance. Urvashi's in-depth knowledge of current events, combined with her ability to " +
                'engage and connect with audiences, has established her as a trusted voice in the industry.',
            'Her reporting style is characterized by a commitment to accuracy, integrity, and a keen eye for detail. ' +
                'Urvashi excels in uncovering and conveying the human element of news stories, allowing viewers to ' +
                'empathize and connect with the subjects she covers. Her versatility extends to a wide range of topics, ' +
                'from politics and social issues to human interest stories, providing a comprehensive and balanced perspective on complex issues.',
            "Urvashi's dedication to journalism is further reflected in her ability to work effectively in high-pressure " +
                'environments and meet tight deadlines without compromising the quality of her work. She is known for ' +
                'her strong work ethic, teamwork, and adaptability, traits that have contributed to her success as a valued member of the TV6 reporting team.',
            'With a passion for journalism that goes beyond the headlines, Urvashi Tiwari-Roopnarine brings a unique perspective and a deep sense of responsibility to her reporting.',
        ],
    },
    {
        name: 'Dr. Aleksandra Przegalinska',
        image: imgAleksandra,
        bio: [
            'Aleksandra Przegalinska  is an Associate Professor and Vice-President of Kozminski University, responsible for International ' +
                'Relations and ESR. She is also currently a Senior Research Associate at the Harvard University Centre for Labour and Just Economy.',
            'Aleksandra is the head of the Human-Machine Interaction Research Center at Kozminski University, and the Leader of the AI in Management Program. ' +
                'Until recently, she conducted post-doctoral research at the Center for Collective Intelligence at the Massachusetts Institute of Technology in Boston.',
            'She graduated from The New School for Social Research in New York. She is the co-author of Collaborative Society ' +
                '(The MIT Press), and Strategizing AI in Business and Education (Cambridge University Press) published together with Dariusz Jemielniak.',
        ],
    },
    {
        name: 'Dr. Phaedra S. Mohammed',
        image: imgPhaedra,
        bio: [
            'Dr. Phaedra S. Mohammed is a Computer Science Lecturer at the Department of Computing and Information Technology, at ' +
                'The University of the West Indies, St. Augustine campus in Trinidad and Tobago.',
            'Her research focuses on the use of Artificial Intelligence applied to Education for developing computational models of ' +
                'culture, producing techniques for modelling and generating natural language, and adding intelligent behaviour to ' +
                'educational learning environments.',
            'She is a co-lead on the Bright Start project which aims to bridge reading instruction gaps experienced by young children ' +
                'in the Caribbean through the use of an intelligent speech technology-enabled autonomous reading tutor. The project ' +
                'recently garnered a prestigious Tools Competition Learning Engineering Prize within the K-12 Accelerated Learning Track.',
            'Dr. Mohammed is a member of the IEEE - Standards Association, Education Society and Women in ' +
                'Engineering, Association for Computing Machinery (ACM), Society for Learning Analytics ' +
                'Research and International Artificial Intelligence in Education Society.',
        ],
    },
    {
        name: 'Dr. Zameer Mohammed',
        image: imgZameer,
        bio: [
            'Dr. Zameer Mohammed’s focus is on providing new and imaginative approaches to current business and educational practices in several of the critical areas of strategic value that are ' +
                'affecting the effective assessment, evaluation and implementation of corporate goals in organizations and institutions around the world.',
            'Dr. Mohammed has undergone specialized training in Organizational Planning, Project management, Leadership, Strategic International Marketing and Corporate Strategy. He is a ' +
                'graduate of the University of the West Indies in Chemistry and Geology, and holds a post graduate diploma in education from the same University. Dr. Mohammed also holds a Masters of ' +
                'Education from the University of Toronto in educational measurement and evaluation and a Masters of Business Administration in Industrial Policy and Corporate Strategy from Maastricht ' +
                'School of Management in the Netherlands. He has earned a doctorate in Educational Leadership from the University of Phoenix with research interest in Industry – Academia relationships in Trinidad and Tobago.',
            'Dr. Mohammed’s has delivered lectures at the University of the West Indies, Arthur Lok Jack Graduate School of Business in MBA courses in International Market Research, International ' +
                'Marketing and Global Business, Innovation and Corporate Strategy. He has successfully completed In-Company assignments for some of the leading organizations in Trinidad and ' +
                'Tobago, Barbados, St. Lucia, Antigua, Jamaica, Anguilla and Guyana.',
            'His corporate exposure is quite extensive and includes several senior positions in some of the major organizations. He has held several senior positions at the University of Trinidad and ' +
                'Tobago (UTT) including Vice-President -Corporate Operations, and Assistant Vice President – Outreach and Industry Relations. He has held the position of General Manager – Business ' +
                'Development at Caroni (1975) Limited.  He has been the Head of Research, Evaluation and Documentation Unit of YTEPP Limited, Corporate Manager - Technology at Royal Bank of ' +
                'Trinidad and Tobago Limited and has served as Director on the boards of Petrotrin, Labido, PEAPSL Consultancy, and the National Gas Company of Trinidad and Tobago Limited. He has ' +
                'served as a Governor of the National Institute for Higher Education, Research, Science and Technology (NIHERST), and Commissioner at the Trinidad and Tobago Electricity Commission.',
            'Dr. Mohammed a member of the Canadian Association for University Continuing Education and a Life member of the International Association of Business Leaders. ',
        ],
    },
    {
        name: 'Mr. Roger St. Hilaire',
        image: imgRoger,
        bio: [
            'Roger is a forward thinking and goal focused professional with an extensive background in providing IT strategic leadership ' +
                "and instructional design. He has over twenty years' experience creating and delivering in-person and online learning content " +
                'in IT Strategy, Governance and Security.',
            "In addition to being a Director at I'deffect, Roger is also a course developer and " +
                'instructor at Learning Tree International, which is a leading provider of IT and management training to business ' +
                'and government organizations worldwide.',
        ],
    },
];

const UpcomingEventsSection = () => {
    return (
        <Box component='section'>
            <Container maxWidth='xl' sx={{ mx: 'auto' }}>
                <Typography
                    sx={{
                        py: '50px',
                        maxWidth: '30ch',
                        mx: 'auto',
                        textAlign: { xs: 'left', sm: 'center' },
                    }}
                    variant='h2'
                >
                    Welcome to our Effectech 2023 Conference Page
                </Typography>
                {statements.map((statement, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{ pb: '32px', maxWidth: 'max-content', mx: 'auto' }}
                        >
                            <Typography gutterBottom variant='h3'>
                                {statement.heading}
                            </Typography>
                            <Typography sx={{ maxWidth: '75ch' }} variant='body1'>
                                {statement.body}
                            </Typography>
                        </Box>
                    );
                })}
            </Container>
            <Events
                images={[]}
                items={eventItemData}
                name='Artificial Intelligence & Analytics in Education: Friend or Foe?'
                registrationLink={REGISTRATION_URL_MAP['27-Oct-2023']}
            />
            <Biographies
                registrationLink={REGISTRATION_URL_MAP['27-Oct-2023']}
                speakers={speakers}
            />
            <Container maxWidth='xl' sx={{ mx: 'auto' }}>
                <Typography
                    sx={{ py: '50px', maxWidth: '30ch', mx: 'auto', textAlign: 'center' }}
                    variant='h2'
                >
                    Event Flyers
                </Typography>
                <Grid container sx={{ gap: '30px', justifyContent: 'center' }}>
                    {[imgFlyer1, imgFlyer2, imgFlyer3].map((img, index) => {
                        return (
                            <Grid
                                item
                                key={index}
                                sm={4}
                                sx={{ position: 'relative', width: '300px' }}
                                xs={12}
                            >
                                <Image
                                    alt='Event Flyer'
                                    src={img}
                                    sx={{ width: '100%', height: 'auto' }}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default UpcomingEventsSection;
