/** @format */

import { components } from 'shared-client';
import { CONSTANT } from 'shared-lib';
import MarqueeInfo from '../../MarqueeInfo';

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;
const { Box, Container, Divider } = components;

const MarqueeSection = () => {
    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} component='section'>
            <Container maxWidth='xl'>
                <Box
                    sx={{
                        position: 'relative',
                        mx: 'auto',
                        top: -50,
                        width: { xs: 250, sm: 400, md: 700, xl: 1000 },
                    }}
                >
                    <MarqueeInfo />
                </Box>
                <Divider light variant='middle' />
            </Container>
        </Box>
    );
};

export default MarqueeSection;
