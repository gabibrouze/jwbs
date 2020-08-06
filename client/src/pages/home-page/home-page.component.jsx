import React from 'react';

import DirectoryContainer from './home-page.styles';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
	return (
		<DirectoryContainer>
			<Directory />
		</DirectoryContainer>
	);
};

export default HomePage;
