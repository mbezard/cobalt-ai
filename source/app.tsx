import React from 'react';
import {Newline, Text} from 'ink';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import OpenAI from 'openai';
import {CliFlags} from './cliFlags.type.js';
import 'dotenv/config';
import {OpenaiProvider} from './modules/openai/OpenaiClientProvider.js';
import {CodebaseExpert} from './CodebaseExpert.js';

type Props = {
	cliFlags: CliFlags;
};
const queryClient = new QueryClient();

export default function App({cliFlags}: Props) {
	const openaiApiKey = cliFlags.openaiApiKey;

	const openai = new OpenAI({
		apiKey: process.env['OPENAI_API_KEY'] || openaiApiKey,
	});

	return (
		<QueryClientProvider client={queryClient}>
			<OpenaiProvider openai={openai}>
				<Text>Welcome to Cobalt. Let's analyze your codebase.</Text>
				<Newline />
				<CodebaseExpert />
			</OpenaiProvider>
		</QueryClientProvider>
	);
}
