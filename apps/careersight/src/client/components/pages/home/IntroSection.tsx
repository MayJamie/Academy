/** @format */

import { ui } from 'shared-client';

const { HeroWithVideo } = ui;

const IntroSection = () => {
    return (
        <HeroWithVideo
            boldText="I'deffect Careersight"
            description={
                'is an online learning and ' +
                'development environment, focused on assisting users to achieve ' +
                'their academic and career goals.'
            }
            title='YOUR CAREER DEVELOPMENT PARTNER'
        />
    );
};

export default IntroSection;
