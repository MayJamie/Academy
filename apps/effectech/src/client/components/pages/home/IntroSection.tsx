/** @format */

import { ui } from 'shared-client';

const { HeroWithVideo } = ui;

const IntroSection = () => {
    return (
        <HeroWithVideo
            boldText="I'deffect Effectech"
            description={
                'is an online hub ' +
                'focused on teaching ' +
                'through our online conferences and webinars.'
            }
            title="WELCOME TO THE I'DEFFECT EVENTS PAGE"
            videoStyles={{ objectPosition: 'center 32%' }}
        />
    );
};

export default IntroSection;
