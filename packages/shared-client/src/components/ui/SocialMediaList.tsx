/** @format */

import { List, Stack } from '..';
import { CustomLinkedInIcon, FacebookIcon } from '../icons';
import AppLink from './AppLink';

const SocialMediaList = () => {
    return (
        <List component={Stack} direction='row' gap={1}>
            <li>
                <AppLink
                    href='https://www.facebook.com/ideffect?mibextid=ZbWKwL'
                    rel='noreferrer'
                    style={{ color: 'black.main' }}
                >
                    <FacebookIcon color='inherit' fontSize='large' />
                </AppLink>
            </li>
            <li>
                <AppLink
                    href='https://www.linkedin.com/company/ideffect/'
                    rel='noreferrer'
                    style={{ color: 'black.main' }}
                    target='_blank'
                >
                    <CustomLinkedInIcon color='inherit' fontSize='large' />
                </AppLink>
            </li>
        </List>
    );
};

export default SocialMediaList;
