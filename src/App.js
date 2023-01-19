/* src/App.js */
import React from 'react';
import { Amplify } from 'aws-amplify';
import { NavBar, BasicLayoutTemplate } from './ui-components';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = () => {
	return (
		<div>
			<NavBar />
			<BasicLayoutTemplate />
		</div>
	);
};

export default App;
