import React from 'react';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

import { HomepageContainer } from './homepage.styles';

const HomePage = () => {
    return (
        <HomepageContainer>
            <DirectoryMenu />
        </HomepageContainer>
    );
}

export default HomePage;