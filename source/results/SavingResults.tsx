import React from 'react';
import {Text} from 'ink';
import {useSaveResults} from './useSaveResults.js';

export const SavingResults = () => {
	useSaveResults();
	return (
		<Text>
			<Text color="green">Results saved</Text>
		</Text>
	);
};
