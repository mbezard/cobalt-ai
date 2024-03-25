import React from 'react';
import {Text} from 'ink';

type Props = {
	isLoading: boolean;
};

export const Loader: React.FC<Props> = ({isLoading}) => {
	return isLoading ? (
		<Text color="yellow">⏳</Text>
	) : (
		<Text color="green">✅</Text>
	);
};
